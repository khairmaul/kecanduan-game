const User = require('../models/userModel');
const Article = require('../models/articleModel');
const Symptom = require('../models/symptomModel');
const Solution = require('../models/solutionModel');
const Result = require('../models/resultModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { getRules } = require('../utils/ruleHelper');
const { getFuzzyRules } = require('../utils/rules');
// const { fuzzifyVariable, fuzzyTsukamoto } = require('../utils/fuzzyTsukamoto');
const { fuzzifyVariable, fuzzyTsukamoto } = require('../utils/tsukamoto');

exports.getOverview = catchAsync(async (req, res, next) => {
  res.status(200).render('overview', {
    title: 'Dashboard',
  });
});

exports.getArticle = catchAsync(async (req, res, next) => {
  let filter = {};

  if (req.query.keyword) {
    filter = {
      title: { $regex: new RegExp(req.query.keyword), $options: 'i' },
    };
  }

  const articles = await Article.find(filter).sort('-createdAt');

  res.status(200).render('article', {
    title: 'Artikel',
    keyword: req.query.keyword,
    articles: articles.length > 0 ? articles : undefined,
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const filter = { role: { $ne: 'admin' } };

  if (req.query.keyword) {
    filter.name = { $regex: new RegExp(req.query.keyword), $options: 'i' };
  }

  const users = await User.find(filter).sort('-createdAt');

  res.status(200).render('user', {
    title: 'Pengguna',
    keyword: req.query.keyword,
    users: users.length > 0 ? users : undefined,
  });
});

exports.getSymptom = catchAsync(async (req, res, next) => {
  let filter = {};

  if (req.query.keyword) {
    filter = {
      $or: [
        {
          name: { $regex: new RegExp(req.query.keyword), $options: 'i' },
        },
        {
          factor: {
            $regex: new RegExp(req.query.keyword),
            $options: 'i',
          },
        },
      ],
    };
  }

  const symptoms = await Symptom.find(filter).sort('-createdAt');

  res.status(200).render('symptom', {
    title: 'Gejala',
    keyword: req.query.keyword,
    symptoms: symptoms.length > 0 ? symptoms : undefined,
  });
});

exports.getSolution = catchAsync(async (req, res, next) => {
  let filter = {};

  if (req.query.keyword) {
    filter = {
      $or: [
        {
          name: { $regex: new RegExp(req.query.keyword), $options: 'i' },
        },
        {
          addictionLevel: {
            $regex: new RegExp(req.query.keyword),
            $options: 'i',
          },
        },
      ],
    };
  }

  const solutions = await Solution.find(filter).sort('-createdAt');

  res.status(200).render('solution', {
    title: 'Solusi',
    keyword: req.query.keyword,
    solutions: solutions.length > 0 ? solutions : undefined,
  });
});

exports.getConsult = catchAsync(async (req, res, next) => {
  const symptoms = await Symptom.find().sort('-createdAt');

  res.status(200).render('consult', {
    title: 'Konsultasi',
    symptoms: symptoms.length > 0 ? symptoms : undefined,
  });
});

exports.getHistory = catchAsync(async (req, res, next) => {
  let filter = {};

  if (req.query.filter) {
    const dayFilter = Date.now() - req.query.filter * 24 * 60 * 60 * 1000;
    filter = {
      $and: [
        { createdAt: { $lte: Date.now() } },
        { createdAt: { $gte: dayFilter } },
      ],
    };
  }

  if (req.query.id) {
    filter.user = req.query.id;
  } else {
    filter.user = req.user._id;
  }

  const selectedUser = await User.findById(filter.user);
  const results = await Result.find(filter).sort('-createdAt');

  res.status(200).render('history', {
    title: 'Riwayat',
    filter: req.query.filter,
    selectedUser,
    results: results.length > 0 ? results : undefined,
  });
});

exports.getResult = catchAsync(async (req, res, next) => {
  const { id, title } = req.query;

  if (!id || !title) return next(new AppError('Esentials data not found', 404));

  const result = await Result.findById(id);

  if (!result) return next(new AppError('Data not found with that id', 404));

  const salienceInput = result.weight.filter(
    (obj) => obj.name === 'salience'
  )[0].value;
  const moodInput = result.weight.filter(
    (obj) => obj.name === 'mood modification'
  )[0].value;
  const toleranceInput = result.weight.filter(
    (obj) => obj.name === 'tolerance'
  )[0].value;
  const withdrawalInput = result.weight.filter(
    (obj) => obj.name === 'withdrawal symptoms'
  )[0].value;
  const conflictInput = result.weight.filter(
    (obj) => obj.name === 'conflict'
  )[0].value;
  const relapseInput = result.weight.filter((obj) => obj.name === 'relapse')[0]
    .value;

  const salienceRange = [0, 9, 15];
  const moodRange = [0, 9, 15];
  const toleranceRange = [0, 9, 15];
  const withdrawalRange = [0, 9, 15];
  const conflictRange = [0, 15, 25];
  const relapseRange = [0, 9, 15];

  const variables = {
    salience: fuzzifyVariable(salienceInput, salienceRange),
    mood: fuzzifyVariable(moodInput, moodRange),
    tolerance: fuzzifyVariable(toleranceInput, toleranceRange),
    withdrawal: fuzzifyVariable(withdrawalInput, withdrawalRange),
    conflict: fuzzifyVariable(conflictInput, conflictRange),
    relapse: fuzzifyVariable(relapseInput, relapseRange),
  };
  const rules = getFuzzyRules(variables);
  // console.log(rules);
  const hasil = fuzzyTsukamoto(variables);
  // console.log(hasil);

  // if (!result.zValue) {
  //   result.zValue = hasil.z;
  //   await result.save();
  // }

  result.zValue = hasil.z;
  await result.save();

  const solution = await Solution.find({
    addictionLevel: result.classification,
  });

  res.status(200).render('result', {
    title,
    result,
    rules,
    ruleStr: getRules,
    fuzzyfication: variables,
    defuzzyfication: hasil,
    solution,
  });
});

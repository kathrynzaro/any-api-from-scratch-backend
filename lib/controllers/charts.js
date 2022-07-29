const { Router } = require('express');
const Chart = require('../models/Chart');
const router = Router();

router
  .get('/:id', async (req, res) => {
    const chart = await Chart.getById(req.params.id);
    res.json(chart);
  })
  .get('/', async (req, res) => {
    const charts = await Chart.getAll();
    const ids = charts.map((chart) => ({ id: chart.id, name: chart.name }));
    res.json(ids);
  });

module.exports = router;

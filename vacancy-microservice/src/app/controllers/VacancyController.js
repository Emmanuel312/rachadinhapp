import Vacancy from '../models/Vacancy';

class VacancyController {
  async store(req, res) {
    const vacancy = await Vacancy.create({ ...req.body, user_id: req.userId });

    return res.json(vacancy);
  }

  async show(req, res) {
    const vacancy = await Vacancy.findById(req.params.id);

    if (!vacancy) return res.status(404).json({ error: 'Vacancy not found' });

    return res.json(vacancy);
  }


  async index(req, res) {
    const vacancies = await Vacancy.find({});


    return res.json(vacancies);
  }
}


export default new VacancyController();

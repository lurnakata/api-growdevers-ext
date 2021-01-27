import apiGrowdevers from '../services/apiGrowdevers';

class UserController {
  async index(request, response) {
    try {
      const authHeader = request.headers.authorization;

      const options = {
        headers: {
          Authorization: authHeader,
        },
      };

      const { data } = await apiGrowdevers.get('/users', options);

      return response.json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async store(request, response) {
    try {
      const user = request.body;

      const { data } = await apiGrowdevers.post('/users', user);

      return response.json(data);
    } catch (error) {
      return response.status(error.response.status || 400).json(error);
    }
  }
}

export default new UserController();

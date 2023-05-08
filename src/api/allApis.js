import api from './axios';

export const createUserApi = async (data) => {
   try {
      const res = await api.post('/user', {
         name: data.name,
         email: data.email,
      });
      return {
         user: res.data.user,
         error: null,
      };
   } catch (err) {
      return { user: null, error: err.message };
   }
};

export const getTextApi = async () => {
   try {
      const res = await api.get('/text');

      console.log(res.data.text);
      return {
         text: res.data.text,
         error: null,
      };
   } catch (err) {
      return { text: null, error: err.message };
   }
};



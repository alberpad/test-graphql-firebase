import firestore from './db';

interface IMaquina {
  id: string;
  idm: string;
  idc: string;
  tipo: string;
  marca: string;
  modelo: string;
  nserie: string;
  anno: string;
}
export const resolvers = {
  Query: {
    async maquinas() {
      const maquinas = await firestore.collection('maquinas').get();
      return maquinas.docs.map((maquina) => maquina.data()) as IMaquina[];
    }
  },
  Mutation: {}
};

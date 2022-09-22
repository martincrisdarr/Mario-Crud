const api = {
  notes: {
    list: () => [
      {
        title: "un titulo",
        id: 1,
        lastEdited: "10/10/10",
        archived: true,
        content: "Algun contenido",
        categories: ["random"],
      },
      {
        title: "un titulo2",
        id: 2,
        lastEdited: "10/10/10",
        archived: false,
        content: "Algun contenido",
        categories: ["random"],
      },
    ],
  },
};

export default api
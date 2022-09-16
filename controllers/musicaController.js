async function allFruits(req, res) {
  try {
    console.log("====================================");
    console.log("Consulta todas las canciones");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: [
        {
          name: "Abba",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
          price: 20,
        },
        {
          name: "Beatles",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
          price: 10,
        },
        {
          name: "Gaga",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
          weight: 0.1,
          price: 5,
        },
        {
          name: "Pantera",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
          price: 200,
        },
      ],
    });
  } catch (error) {
    console.log(
      "===============Error Consulta todas las canciones====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error trayendo la información",
    });
  }
}

async function getFruitById(req, res) {
  try {
    console.log("====================================");
    console.log("Consulta cancion por ID");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: {
        name: "Abba",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
        price: 20,
      },
    });
  } catch (error) {
    console.log(
      "===============Error Consulta cancion por ID====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error trayendo la información",
    });
  }
}

async function editFruit(req, res) {
  try {
    console.log("====================================");
    console.log("Editar cancion");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "La cancion se ha actualizado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar cancion====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error actualizando la información",
    });
  }
}

async function deleteFruit(req, res) {
  try {
    console.log("====================================");
    console.log("eliminar cancion");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "La cancion se ha eliminado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar cancion===================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error eliminando la información",
    });
  }
}

async function createFruit(req, res) {
  try {
    console.log("====================================");
    console.log("Crear cancion");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "La cancion se ha creado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar fruta====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error al guardar la información",
    });
  }
}

module.exports = {
  allFruits,
  getFruitById,
  editFruit,
  deleteFruit,
  createFruit
};

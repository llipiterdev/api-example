async function allFruits(req, res) {
  try {
    console.log("====================================");
    console.log("Consulta todas las frutas");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: [
        {
          name: "Apple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
          price: 35,
        },
        {
          name: "Banana",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
          price: 12,
        },
        {
          name: "Grapes",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
          weight: 0.1,
          price: 45,
        },
        {
          name: "Pineapple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
          price: 200,
        },
      ],
    });
  } catch (error) {
    console.log(
      "===============Error Consulta todas las frutas====================="
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
    console.log("Consulta fruta por ID");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: {
        name: "Apple",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
        price: 35,
      },
    });
  } catch (error) {
    console.log(
      "===============Error Consulta fruta por ID====================="
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
    console.log("Editar fruta");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "La fruta se ha actualizado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar fruta====================="
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
    console.log("eliminar  fruta");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "La fruta se ha eliminado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar fruta====================="
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
    console.log("Crear  fruta");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "La fruta se ha creado correctamente"
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

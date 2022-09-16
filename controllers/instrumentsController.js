async function allInstruments(req, res) {
  try {
    console.log("====================================");
    console.log("Consulta todas los instrumentos");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: [
        {
          name: "Piano",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Steinway_%26_Sons_concert_grand_piano%2C_model_D-274%2C_manufactured_at_Steinway%27s_factory_in_Hamburg%2C_Germany.png/300px-Steinway_%26_Sons_concert_grand_piano%2C_model_D-274%2C_manufactured_at_Steinway%27s_factory_in_Hamburg%2C_Germany.png",
          price: 373102805,
        },
        {
          name: "Bateria",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/OutsideBRX-15.JPG/360px-OutsideBRX-15.JPG",
          price: 12054000,
        },
        {
          name: "Guitarra",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Gibson_LP_Classic.png/338px-Gibson_LP_Classic.png",
          price: 3245060,
        },
        {
          name: "Bajo",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Gibson_eb3_67.jpg/150px-Gibson_eb3_67.jpg",
          price: 4569800,
        },
      ],
    });
  } catch (error) {
    console.log(
      "===============Error Consulta todas los instrumentos====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error trayendo la información",
    });
  }
}

async function getInstrumentById(req, res) {
  try {
    console.log("====================================");
    console.log("Consulta instrumento por ID");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: {
        name: "Piano",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Steinway_%26_Sons_concert_grand_piano%2C_model_D-274%2C_manufactured_at_Steinway%27s_factory_in_Hamburg%2C_Germany.png/300px-Steinway_%26_Sons_concert_grand_piano%2C_model_D-274%2C_manufactured_at_Steinway%27s_factory_in_Hamburg%2C_Germany.png",
        price: 373102805,
      },
    });
  } catch (error) {
    console.log(
      "===============Error Consulta instrumento por ID====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error trayendo la información",
    });
  }
}

async function editInstrument(req, res) {
  try {
    console.log("====================================");
    console.log("Editar instrumento");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "El instrumento se ha actualizado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar instrumento====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error actualizando la información",
    });
  }
}

async function deleteInstrument(req, res) {
  try {
    console.log("====================================");
    console.log("eliminar instrumento");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "El instrumento se ha eliminado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar instrumento====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error eliminando la información",
    });
  }
}

async function createInstrument(req, res) {
  try {
    console.log("====================================");
    console.log("Crear instrumento");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "El instrumento se ha creado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar instrumento ====================="
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
  allInstruments,
  getInstrumentById,
  editInstrument,
  deleteInstrument,
  createInstrument
};

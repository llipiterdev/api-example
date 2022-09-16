async function allcars(req, res) {
  try {
    console.log("====================================");
    console.log("Consulta todas las carros");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: [
        {
          name: "Mustang",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
          price: 35,
        },
        {
          name: "Renault",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
          price: 12,
        }
      ],
    });
  } catch (error) {
    console.log(
      "===============Error Consulta todas las carros====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error trayendo la información",
    });
  }
}

async function getCarById(req, res) {
  try {
    console.log("====================================");
    console.log("Consulta carro por ID");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: {
        name: "Mustang",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
        price: 35,
      },
    });
  } catch (error) {
    console.log(
      "===============Error Consulta carro por ID====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error trayendo la información",
    });
  }
}

async function editCar(req, res) {
  try {
    console.log("====================================");
    console.log("Editar carro");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "El carro se ha actualizado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar carro====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error actualizando la información",
    });
  }
}

async function deleteCar(req, res) {
  try {
    console.log("====================================");
    console.log("eliminar  carro");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "El carro se ha eliminado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar carro====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error eliminando la información",
    });
  }
}

async function createCar(req, res) {
  try {
    console.log("====================================");
    console.log("Crear  carro");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "El carro se ha creado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar carro====================="
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
  allcars,
  getCarById,
  editCar,
  deleteCar,
  createCar
};

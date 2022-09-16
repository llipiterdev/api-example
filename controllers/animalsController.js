async function allAnimals(req, res) {
  try {
    console.log("====================================");
    console.log("Consulta todos los animales");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: [
        {
          name: "Dog",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
          gender: "Male",
        },
        {
          name: "Cat",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
          gender: "Female",
        },
        {
          name: "Fish",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
          weight: 0.1,
          gender: "Female",
        },
        {
          name: "Spider",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
          gender: "Male",
        },
      ],
    });
  } catch (error) {
    console.log(
      "===============Error Consulta todos los animales====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error trayendo la información",
    });
  }
}

async function getAnimalById(req, res) {
  try {
    console.log("====================================");
    console.log("Consulta animal por ID");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: {
        name: "Dog",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
        gender: "Male",
      },
    });
  } catch (error) {
    console.log(
      "===============Error Consulta animal por ID====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error trayendo la información",
    });
  }
}

async function editAnimal(req, res) {
  try {
    console.log("====================================");
    console.log("Editar animal");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "El animal se ha actualizado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar animal====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error actualizando la información",
    });
  }
}

async function deleteAnimal(req, res) {
  try {
    console.log("====================================");
    console.log("eliminar  animal");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "El animal se ha eliminado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar animal====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error eliminando la información",
    });
  }
}

async function createAnimal(req, res) {
  try {
    console.log("====================================");
    console.log("Crear  animal");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "El animal se ha creado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar animal====================="
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
  allAnimals,
  getAnimalById,
  editAnimal,
  deleteAnimal,
  createAnimal
};

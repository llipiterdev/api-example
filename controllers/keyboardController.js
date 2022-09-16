const allKeyboards = async (req, res) =>{
  try {
    console.log("====================================");
    console.log("Consulta todos los teclados");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: [
        {
          name: "Kumara K552",
          price: 200000,
        },
        {
          name: "Apex mini pro",
          price: 430000,
        },
        {
          name: "Custom keyboard",
          price: 1000000,
        },
        {
          name: "Razer Huntsman",
          price: 200000,
        },
      ],
    });
  } catch (error) {
    console.log(
      "===============Error Consulta todos los teclados====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error trayendo la información",
    });
  }
}

const getKeyboardById =  async (req, res) =>{
  try {
    console.log("====================================");
    console.log("Consulta teclado por ID");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: {
        name: "Kumara K552",
        price: 200000,
      },
    });
  } catch (error) {
    console.log(
      "===============Error Consulta teclado por ID====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error trayendo la información",
    });
  }
}

const editKeyboard = async (req, res) => {
  try {
    console.log("====================================");
    console.log("Editar teclado");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "La fruta se ha actualizado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar teclado====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error actualizando la información",
    });
  }
}

const deleteKeyboard =  async (req, res) => {
  try {
    console.log("====================================");
    console.log("eliminar  teclado");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "La fruta se ha eliminado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar teclado====================="
    );
    console.log("error: ", error);
    console.log("====================================");
    return res.status(500).json({
      responseCode: 1001,
      responseMessage: "Ocurrió un error eliminando la información",
    });
  }
}

 const createKeyboard = async(req, res) => {
  try {
    console.log("====================================");
    console.log("Crear  teclado");
    console.log("====================================");

    return res.status(200).json({
      responseCode: 0,
      responseMessage: "La fruta se ha creado correctamente"
    });
  } catch (error) {
    console.log(
      "===============Error editar teclado====================="
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
  allKeyboards,
  getKeyboardById,
  editKeyboard,
  deleteKeyboard,
  createKeyboard
};

module.exports = {
  BAD_REQUEST: {
    status: 400,
    success: false,
    message: "Parámetros incompletos",
    info: {}
  },
  NOT_FOUND: {
    status: 404,
    success: true,
    message: "Recurso no encontrado",
    info: {}
  },
  NO_RESPONSE: {
    status: 204,
    success: true,
    message: "Operación exitosa",
    info: {}
  },
  SUCCESS_RESPONSE: (info) => {
    return {
      status: 200,
      success: true,
      message: "Operación exitosa",
      info: info
    }
  },
  CREATE_RESPONSE: (info) => {
    return {
      status: 201,
      success: true,
      message: "Información almacenada",
      info: info
    }
  },
  UPDATE_RESPONSE: (info) => {
    return {
      status: 200,
      success: true,
      message: "Información actualizada",
      info: info
    }
  },
  DELETE_RESPONSE: (info) => {
    return {
      status: 200,
      success: true,
      message: "Información eliminada",
      info: info
    }
  },
  FAIL_RESPONSE: (info) => {
    return {
      status: 500,
      success: false,
      message: "Ha ocurrido un error",
      info: info
    }
  }
}
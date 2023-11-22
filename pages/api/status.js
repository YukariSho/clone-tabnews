function status(request, response) {
  response.status(200).json({ chave: "yo!" });
}

export default status;

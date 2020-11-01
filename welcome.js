client.on("guildMemberAdd'", member => {

    const pandabienvenida = new Discord.MessageEmbed() 
    .setTitle("texto de bienvenida")
    .setColor("RED") //o el color que quieran
    .setDescription("descripcion")
    .setImage("la url de la imagen(opciona)")                                                                                         
  
    client.channels.cache.get("ID_DEL_CANAL").send(pandabienvenida)
    member.roles.add("ID_DEL_ROL_QUE_LE_VAN_A_DAR")
  });
  
<template>
  <div id="formulario">
    <form action="" method="post" enctype="multipart/form-data">
    <div id="infoum" >
        <label class="info" for="">NOME</label>
        <input class="placeholder" type="text" name ="nome" required="required" placeholder="">
    </div>
    <div id="infodois" >
        <label class="info" for="">EMAIL</label>
        <input class="placeholder" type="text" name="nome" required="required" placeholder="">
    </div>
    <div id="infotres" >
        <label class="info" for="">TELEFONE</label>
        <input class="placeholder" type="text" name="telefone" required="required" placeholder="">
    </div>
    <div id="infoquatro">
        <label class="info" for="">MENSAGEM</label>
        <textarea name="mensagem" id="placeholder" required="required" placeholder="" cols="61" rows="10"></textarea>
    </div>
    </form>
    <div id="infocinco">
    <button id="enviar">ENVIAR!</button>
    </div>
    <div id="logo">
        <div>
        <img  src="../assets/face.png" alt="">
        </div>
        <div>
        <img  src="../assets/insta.png" alt="">
        </div>
        <div>
        <img  src="../assets/be.png" alt="">
        </div>
    </div>
    
    </div>
</template>

<script>
export default {
    
}

</script>

<style>



#formulario{
    background-color: #f8f8f8;
    
}
.info{
    font-size: 16px;
    display: flex;
    flex-direction: column;
    color:#4e4e4e;
    font-family: monospace;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: left;
    opacity: 0.8;

}
.placeholder{
    width: 454.1px;
    height: 30.5px;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    border-bottom: solid 1px #e8777b ;
    background-color: #f8f8f8;
    opacity: 0.3;
}
#infoum{
    
}
#infodois{
    margin-top: 34.7px;
    
}
#infotres{
    margin-top: 35.2px;
    
}
#infoquatro{
    margin-top: 22.1px;
    
}
#infocinco{
    width: 454.1px;
    height: 30px;
    
}
#placeholder{
    width: 453.4px;
    height: 137.8px;
    border: solid 0.3px #e8777b;
    margin-top:15.8px;
    background-color: #f8f8f8;
    opacity: 0.3;
}
#enviar{
    font-family: monospace;
    font-size: 12px;
    color: black;
    font-weight: 500;
    width: 73.7px;
    height: 25.8px;
    border: solid 0.6px #e8777b ;
    background-color: #f8f8f8;
    margin-top:21.8px;
    float:right;
    opacity: 0.6;
    
    
}
#enviar:hover {
    color:white;
    background-color:#e8777b; 
}
#logo{
    margin-top: 33.7px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    width: 180px;
}
</style>
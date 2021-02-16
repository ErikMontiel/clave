<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clave</title>

    <?php require_once 'app/config.php' ?> 
    <?php require_once 'app/dependencias.php' ?>
    <link rel="manifest" href="./manifest.json">

</head>
<body>

    <?php
        if(isset($_GET['vista_curp'])){

            $direccion = explode('/', $_GET['vista_curp']);

            switch($direccion[0]){

                case 'clave':{
                    require_once 'view/clave.html';
                break;
                }

                default:{
                    require_once 'view/404.html';
                break;
                }
            }
        }else{
            require_once 'view/clave.html';
        }
    ?>
    
     <script src="./script.js"></script>
</body>
</html>
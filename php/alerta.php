<?php

	// function alerta( $texto , $link ) {
	function alert( $texto , $link ) {

		$alertando = '

			<div style="
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background: #000;
				opacity: 0.8;
				-moz-opacity: 0.8;
				filter: alpha(opacity=80);
				z-index: 99999;
			">

				<div style="
					width: 400px;
					height: 200px;
					position: absolute;
					top: 50%;
					left: 50%;
					margin-top: -100px;
					margin-left: -200px;
					background: #FFF;
					font-family: Verdana, Geneva, Arial;
					font-size: 12px;
				">

					<div style="margin: 20px;">

						<div style="font-weight: bold; font-size: 22px; color: #BD1717; text-align: center;">
						AVISO</div>

						<div style="margin-top: 20px;"> ' .$texto. ' </div>

						<a href=" ' .$link. ' " style="color: #FFF;">
							<div style="
								color: #FFF;
								padding: 20px;
								margin: 0 80px;
								margin-top: 40px;
								background: #BD1717;
							" align="center"> OK </div>
						</a>

					</div>

				</div>

			</div>

		';

		return $alertando;
		exit;

	}

?>
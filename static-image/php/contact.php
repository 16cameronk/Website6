<?php 
sleep(2);
        //Configure following constants 
        define("DOE_NAME","Prashant");                 //Specify your name
        define("DOE_ADD","prashant.jain@crelegant.com");  //Specify your address
        define("DOE_SUB","Test Mail");                 //Specify you subject

        //Declaring all the data to varibales
        $name        = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
        $email       = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $website     = filter_var($_POST["website"], FILTER_SANITIZE_STRING);
        $company     = filter_var($_POST["company"], FILTER_SANITIZE_STRING);
        $message     = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
        

		
		//Validate data and return success or error message
		$error = '';	
		$reg_exp = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,4}$/";
		
		if (!preg_match($reg_exp, $email)) {
				    
					$error .= "<p>A valid email address is required.</p>";			   
		}
		if (empty($name)) {
				   
				    $error .= "<p>Please provide your name.</p>";			   
		}			
		if (empty($message)) {
					
					$error .= "<p>A message is required.</p>";
		}		
		
        if (!empty($error)) {
					$return['error'] = true;
					$return['msg'] = "<h3>Your form is not filled properly.</h3>".$error;					
					echo json_encode($return);
					exit();
		} else {
            //Message Body
            $msg = 'Name:'.$name.'\n';
            $msg .='Email:'. $email;
            $msg .='Website:'.$website;    
			$msg .='Company:'.$company;
			$msg .='Message:'.$message;
            
            $recipient = DOE_NAME . " <" . DOE_ADD . ">";
            $headers = "From: " . $name . " <" . $email . ">";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
            //It will generate an html email
            $msg  = '<html><body>';
            $msg .= '<table rules="all" style="border:1px solid #666;" cellpadding="10">';
            $msg .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . $name . "</td></tr>";
            $msg .= "<tr><td><strong>Email:</strong> </td><td>" . $email . "</td></tr>";
            $msg .= "<tr><td><strong>Website:</strong> </td><td>" . $website . "</td></tr>";
            $msg .= "<tr><td><strong>Company:</strong> </td><td>" . $company . "</td></tr>";
            $msg .= "<tr><td><strong>Message:</strong> </td><td>" . $message . "</td></tr>";
            $msg .= "</table>";
            $msg .= "</body></html>";
            
            //Sending mail
            mail($recipient, DOE_SUB , $msg , $headers);
            
            //feedback to visitor
            $return['error'] = false;
			$return['msg'] = "<p>Your message sent successfully " .$name .".</p>"; 
			echo json_encode($return);
            
                 
}	
?> 


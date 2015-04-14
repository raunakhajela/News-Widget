
(function($){

	// +++++++++++++++++ the sliding query space ++++++++++++++

	var ButtonUp 	= 	$('#button_up_or'),
		ButtonDown 	= 	$('#button_down_or'),
		current		=	3,
		height 		= 	$('.full_news_slider li').height();
		console.log(height);
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	ButtonUp.on('click',function(){
		current--;
		console.log(current);
		$('.title_slider_list li:first-child').animate({
			'margin-top':'+=61px'
		},200);
		$('.full_news_slider li:first-child').animate({
			'margin-top':'+=288px'
		},200);

		


			// ----- for first----
			if(current == 1){
				
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(1)')
				 	.next($('.title_slider_list li:nth-child(2)'))
				 		.animate({
				 			'margin-top':'225px',
				 			'margin-bottom':'0px'
				 			},200);
				 		// --- fro button--
				 			$('#button_up_or').hide();
				 			$('#button_up_fake').show();
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}
				
			
				


			// ----- for second----
			if(current == 2){
				
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(2)')
				 	.next($('.title_slider_list li:nth-child(3)'))
				 		.animate({
				 			'margin-top':'225px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}
			// ----- for third----
			if(current == 3){
				
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(3)')
				 	.next($('.title_slider_list li:nth-child(4)'))
				 		.animate({
				 			'margin-top':'225px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}	 
			// ----- for forth----
			if(current == 4){
				
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(4)')
				 	.next($('.title_slider_list li:nth-child(5)'))
				 		.animate({
				 			'margin-top':'225px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}	 		
			// ----- for fifth----
			if(current == 5){
				
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(5)')
				 	.next($('.title_slider_list li:nth-child(6)'))
				 		.animate({
				 			'margin-top':'225px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}

			// ----- for sixth----
			if(current == 6){
				
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(6)')
				 	.next($('.title_slider_list li:nth-child(7)'))
				 		.animate({
				 			'margin-top':'225px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}
			// ----- for seventh----
			if(current == 7){
					
				$('#button_down_or').show();
				$('#button_down_fake').hide();
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(7)')
				 	.next($('.title_slider_list li:nth-child(8)'))
				 		.animate({
				 			'margin-top':'220px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);	
				}
			// ----- for eight----
			if(current == 8){
				

				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(8)')
				 	.next($('.title_slider_list li:nth-child(9)'))
				 		.animate({
				 			'margin-top':'220px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}
	});	
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	
	ButtonDown.on('click',function(){
		current++;
		console.log(current);

		$('.title_slider_list li:first-child').animate({
			'margin-top':'-=61px'
		},200);

		$('.full_news_slider li:first-child').animate({
			'margin-top':'-=288px'
		},200);

		
		// ----- for second----
			if(current == 2){
				$('#button_up_or').show();
			$('#button_up_fake').hide();	
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(2)')
				 	.next($('.title_slider_list li:nth-child(3)'))
				 		.animate({
				 			'margin-top':'223px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}
		// ----- for third----
			if(current == 3){
				
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(3)')
				 	.next($('.title_slider_list li:nth-child(4)'))
				 		.animate({
				 			'margin-top':'225px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}	 
		// ----- for forth----
			if(current == 4){
				
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(4)')
				 	.next($('.title_slider_list li:nth-child(5)'))
				 		.animate({
				 			'margin-top':'225px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}
		// ----- for fifth----
			if(current == 5){
				
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(5)')
				 	.next($('.title_slider_list li:nth-child(6)'))
				 		.animate({
				 			'margin-top':'225px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}

			// ----- for sixth----
			if(current == 6){
				
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(6)')
				 	.next($('.title_slider_list li:nth-child(7)'))
				 		.animate({
				 			'margin-top':'225px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(8)').animate({
							'margin':'0px'
						},200);	
				}
			// ----- for seventh----
			if(current == 7){
					
				$('#button_down_or').show();
				$('#button_down_fake').hide();
				// +++++++++++ for next and prev++++++++++
				$('.title_slider_list li:nth-child(7)')
				 	.next($('.title_slider_list li:nth-child(8)'))
				 		.animate({
				 			'margin-top':'223px',
				 			'margin-bottom':'0px'
				 			},200);
				 		
				 		//+++++++++++
				 		$('.title_slider_list li:nth-child(5)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(4)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(3)').animate({
							'margin':'0px'
						},200);
						$('.title_slider_list li:nth-child(2)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(7)').animate({
							'margin':'0px'
						},200);	
						$('.title_slider_list li:nth-child(6)').animate({
							'margin':'0px'
						},200);	
				}
		//++++++++++++ for eight ++++++++++++
		
		if(current == 8){
			$('#button_down_or').hide();
			$('#button_down_fake').show();
			
			$('.title_slider_list li:nth-child(8)').animate({
				'margin-top':'220px'
			},200);
		}
	});

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
				// the li content section 
		$('.title_slider_list li').on('mouseenter',function(){
			$(this).children($('.date_space')).children($('.date')).animate({
				'margin-left':'-70px'
			},200);
			$(this).children($('.date_space')).children($('.li_arrow')).animate({
				'margin-right':'-25px'
			},200);
			$(this).children($('.date_space')).css({
				'border-right':'1px solid #111111'
			});
			$(this).children($('.title_space')).children($('.title_heading')).css({
				'color':'#f9f9f9'
			});
		});

		$('.title_slider_list li').on('mouseleave',function(){
			$(this).children($('.date_space')).children($('.li_arrow')).animate({
				'margin-right':'80px'
			},200);
			$(this).children($('.date_space')).children($('.date')).animate({
				'margin-left':'0px'
			},200);
			
			$(this).children($('.date_space')).css({
				'border-right':'1px solid #333333'
			});
			$(this).children($('.title_space')).children($('.title_heading')).css({
				'color':'#9e9e9e'
			});
		});

	//&&&

})(jQuery)
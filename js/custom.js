const toTop = document.querySelector(".to-top");
             const toTop1 = document.querySelector(".to-top-1");

                    window.addEventListener("scroll", () => {
                    if (window.pageYOffset > 100) {
                        toTop.classList.add("active");
                        toTop1.classList.add("active");
                    } else {
                        toTop.classList.remove("active");
                        toTop1.classList.remove("active");
                    }
                    })

                    /**********************Tab-Function***********/

                    /*var TabContent1 = document.getElementById("TabContent1");
                    var TabContent2 = document.getElementById("TabContent2");
                    var TabContent3 = document.getElementById("TabContent3");
                    var tabBTN1 = document.getElementById("tabBTN1");
                    var tabBTN2 = document.getElementById("tabBTN2");
                    var tabBTN3 = document.getElementById("tabBTN3");

                    function tabLOGO(){
                        TabContent1.style.opacity= "1";
                        TabContent2.style.opacity= "0";
                        TabContent3.style.opacity= "0";
                    }
                    function tabMOCKUP(){
                        TabContent1.style.opacity= "0";
                        TabContent2.style.opacity= "1";
                        TabContent3.style.opacity= "0";
                    }
                    function tabWEBDESIGN(){
                        TabContent1.style.opacity= "0";
                        TabContent2.style.opacity= "0";
                        TabContent3.style.opacity= "1"
                    }*/

                    const tabs = document.querySelectorAll('ul li');
                    const divs = document.querySelectorAll('.content > div');

                        tabs.forEach((tab) => {
                            //Add click for each li
                            tab.addEventListener("click", function (e) {
                                tabs.forEach((tab) => {
                                    //On click remove class Active from all Li
                                    tab.classList.remove("active");
                                });
                                //Add Class Active On the li 
                                e.currentTarget.classList.add("active");
                                divs.forEach((div) => {
                                    //Display None for all content Divs on click
                                    div.style.display = 'none';
                                    //Select the div the contain the class of data-content and make it display flex
                                    document.querySelector('.' + e.currentTarget.dataset.content).style.display = 'flex';
                                });
                            });
                        })

                          /**********************Mobile Tab***********/
                        var toggleClick = document.querySelector(".toggleBox");
                            var mobileNav = document.querySelector(".mobile-nav");
                            toggleClick.addEventListener('click',()=>{
                            toggleClick.classList.toggle('active');
                            mobileNav.classList.toggle('active');
                             })

                            
                            
                            
                            
                            
                            
                             window.addEventListener('scroll',reveal)

                               
                             
                             function reveal(){
                                    var reveals = document.querySelectorAll('.reveal');

                                    for(var i=0; i < reveals.length; i++){

                                    var windowheight = window.innerHeight;
                                    var revealtop = reveals[i].getBoundingClientRect().top
                                    var revealpoint = 100;

                                    if(revealtop <windowheight - revealpoint){
                                        reveals[i].classList.add('active');
                                    }
                                    else{
                                        reveals[i].classList.remove('active');  
                                        
                                    }
                                }            
                                }


                        /*$(function(){
                                var scroll = $(document).scrollTop();
                                var navHeight = $('.navbar-1').outerHeight();

                                $(window).scroll(function(){
                                var scrolled = $(document).scrollTop();
                                if(scrolled > navHeight){
                                    $('.navbar-1').addClass('animate');
                                }else{
                                    $('.navbar-1').removeClass('animate');
                                }
                                
                                if(scrolled > scroll){
                                    $('.navbar-1').removeClass('sticky');
                                }else{
                                    $('.navbar-1').addClass('sticky');
                                }
                                scroll = $(document).scrollTop();
                                });

                            });*/
 
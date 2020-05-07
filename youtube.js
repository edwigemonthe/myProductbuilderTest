
function search ()
{
	var elements = document.querySelectorAll('ytd-video-renderer');
	var nb = elements.length
	var tab = new Array (nb);
	for (var i = 0; i < nb; ++i) {
	    tab[i]= new Array(3);
	}
	for (var i=0;i<nb;i++)
	    {
	    	for (var j=0; j<3 ;j++)
	    	{
		    	//elements[i].children[0].children[0].children[0].getAttribute('href');
			    tab[i][0]= elements[i].children[0].children[0].children["thumbnail"].href;//URL
			    tab[i][1]= elements[i].children[0].children[1].children[0].children[0].children[0].children["video-title"].getAttribute('title');//titre
			    tab[i][2]= elements[i].children[0].children[0].children["thumbnail"].children[0].children["img"].src;//thumbnail
		    }	
	    } 
	    return tab;
}

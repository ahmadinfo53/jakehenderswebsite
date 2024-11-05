function applyHoverEffect(div) {
      const img = div.querySelector('img');
      const h2 = div.querySelector('h2');

      div.addEventListener('mouseover', function() {
        img.style.opacity ="1";
    });
      div.addEventListener('mouseout', function() {
        img.style.opacity = '0';
      });
    }

    const divs = document.querySelectorAll('.menu-divs');
    divs.forEach(applyHoverEffect);


    const myDiv = document.querySelector('.blogs-internal-sec');
    const extrawidth = myDiv.offsetWidth - window.innerWidth + (window.innerWidth/10);

    window.addEventListener('scroll', function() {
        scrolltotalheight = document.documentElement.scrollHeight - window.innerHeight;
        if (extrawidth > 0) {
        const totalscrollamount = window.scrollY * (extrawidth/scrolltotalheight);
        myDiv.style.left = ((window.innerWidth/10) - totalscrollamount) + "px";
        }
        else {
            myDiv.style.left = (window.innerWidth/10) + "px";
        }
});
function sendmail() {
    const fname = document.querySelector("#fullname").value;
    const femail = document.querySelector("#fullemail").value;
    const fmessage = document.querySelector("#fullmessage").value;

    window.location.href = `mailto:jackhenderson32@gmail.com?subject=Contacting%20regarding%20writing&body=Name:${fname}%0A Email:${femail}%0A Message:${fmessage}`
}


document.getElementById('travel-link-1').addEventListener('click', function() {
      window.open('https://www.departures.com/travel/food/ireland-culinary-revolution', '_blank');})

document.getElementById('travel-link-2').addEventListener('click', function() {
      window.open('https://www.departures.com/lifestyle/wine-spirits/rye-whiskey-trail-new-york', '_blank');})

document.getElementById('travel-link-3').addEventListener('click', function() {
      window.open('https://www.departures.com/travel/travel-based-on-zodiac-sign#intro', '_blank');})


document.getElementById('travel-link-4').addEventListener('click', function() {
      window.open('https://www.wsj.com/articles/escape-to-buffalo-a-skeptics-guide-to-a-great-weekend-getaway-1536250720', '_blank');})

document.getElementById('travel-link-5').addEventListener('click', function() {
      window.open('https://www.wsj.com/articles/hotels-a-love-story-24-famous-globetrotters-on-their-cherished-escapes-1524767407?shareToken=st59bf56bf55994309a2713aa03c2295bb&reflink=article_email_share', '_blank');})

document.getElementById('travel-link-6').addEventListener('click', function() {
      window.open('https://www.architecturaldigest.com/story/north-fork-long-island-travel-guide', '_blank');})
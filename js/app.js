fetch('js/food.json')
    .then(response => response.json())
    .then(data => {
        for(let i=0; i < data.food[0].antipasta.length; i++) {
            let div1 = document.createElement('div');
            div1.id = [i];
            div1.className = 'col-md-6 col-lg-4';

            let div2 = document.createElement('div');
            div2.className = 'card mb-3';

            let img1 = document.createElement('img');
            img1.className = 'card-img-top';
            img1.src = (data.food[0].antipasta[i].foodImage);
            img1.alt = (data.food[0].antipasta[i].foodName);


            let div3 = document.createElement('div');
            div3.className = 'card-body'

            let h5 = document.createElement('h5');
            h5.id = [i];
            h5.className = 'card-title';
            h5.innerText = (data.food[0].antipasta[i].foodName);

            let hr = document.createElement('hr');

            let p = document.createElement('p');
            p.className = 'card-text text-end';
            p.innerText = (data.food[0].antipasta[i].foodPrice);

            document.getElementById("antiPasta").appendChild(div1);
            div1.appendChild(div2);
            div2.appendChild(img1);
            div2.appendChild(div3);
            div3.appendChild(h5);
            div3.appendChild(hr);
            div3.appendChild(p);
        }
        for(let x=0; x < data.food[0].firstPlate.length; x++) {
            let div4 = document.createElement('div');
            div4.id = [x];
            div4.className = 'col-md-6 col-lg-4';

            let div5 = document.createElement('div');
            div5.className = 'card mb-3';

            let img2 = document.createElement('img');
            img2.className = 'card-img-top';
            img2.src = (data.food[0].firstPlate[x].foodImage);
            img2.alt = (data.food[0].firstPlate[x].foodName);


            let div6 = document.createElement('div');
            div6.className = 'card-body';

            let title = document.createElement('h5');
            title.id = [x];
            title.className = 'card-title';
            title.innerText = (data.food[0].firstPlate[x].foodName);

            let elHr = document.createElement('hr');

            let pg = document.createElement('p');
            pg.className = 'card-text text-end';
            pg.innerText = (data.food[0].firstPlate[x].foodPrice);

            document.getElementById("firstPlate").appendChild(div4);
            div4.appendChild(div5);
            div5.appendChild(img2);
            div5.appendChild(div6);
            div6.appendChild(title);
            div6.appendChild(elHr);
            div6.appendChild(pg);
        }
        for(let x=0; x < data.food[0].drinks.length; x++) {
            let firstDiv = document.createElement('div');
            firstDiv.id = [x];
            firstDiv.className = 'col-md-6 col-lg-4';

            let secondDiv = document.createElement('div');
            secondDiv.className = 'card mb-3';

            let imgF = document.createElement('img');
            imgF.className = 'card-img-top';
            imgF.src = (data.food[0].drinks[x].foodImage);
            imgF.alt = (data.food[0].drinks[x].foodName);


            let thirdDiv = document.createElement('div');
            thirdDiv.className = 'card-body';

            let title = document.createElement('h5');
            title.id = [x];
            title.className = 'card-title';
            title.innerText = (data.food[0].drinks[x].foodName);

            let elHr = document.createElement('hr');

            let pg = document.createElement('p');
            pg.className = 'card-text text-end';
            pg.innerText = (data.food[0].drinks[x].foodPrice);

            document.getElementById("drinks").appendChild(firstDiv);
            firstDiv.appendChild(secondDiv);
            secondDiv.appendChild(imgF);
            secondDiv.appendChild(thirdDiv);
            thirdDiv.appendChild(title);
            thirdDiv.appendChild(elHr);
            thirdDiv.appendChild(pg);
        }
        for(let i=0; i < data.food[0].beers.length; i++) {
            let firstDiv = document.createElement('div');
            firstDiv.id = [i];
            firstDiv.className = 'col-md-6 col-lg-4';

            let secondDiv = document.createElement('div');
            secondDiv.className = 'card mb-3';

            let imgF = document.createElement('img');
            imgF.className = 'card-img-top';
            imgF.src = (data.food[0].beers[i].foodImage);
            imgF.alt = (data.food[0].beers[i].foodName);


            let thirdDiv = document.createElement('div');
            thirdDiv.className = 'card-body';

            let title = document.createElement('h5');
            title.id = [i];
            title.className = 'card-title';
            title.innerText = (data.food[0].beers[i].foodName);

            let elHr = document.createElement('hr');

            let pg = document.createElement('p');
            pg.className = 'card-text text-end';
            pg.innerText = (data.food[0].beers[i].foodPrice);

            document.getElementById("beers").appendChild(firstDiv);
            firstDiv.appendChild(secondDiv);
            secondDiv.appendChild(imgF);
            secondDiv.appendChild(thirdDiv);
            thirdDiv.appendChild(title);
            thirdDiv.appendChild(elHr);
            thirdDiv.appendChild(pg);
        }
        for(let x=0; x < data.food[0].wine.length; x++) {
            let firstDiv = document.createElement('div');
            firstDiv.id = [x];
            firstDiv.className = 'col-md-6 col-lg-4';

            let secondDiv = document.createElement('div');
            secondDiv.className = 'card mb-3';

            let imgF = document.createElement('img');
            imgF.className = 'card-img-top';
            imgF.src = (data.food[0].wine[x].foodImage);
            imgF.alt = (data.food[0].wine[x].foodName);


            let thirdDiv = document.createElement('div');
            thirdDiv.className = 'card-body';

            let title = document.createElement('h5');
            title.id = [x];
            title.className = 'card-title';
            title.innerText = (data.food[0].wine[x].foodName);

            let elHr = document.createElement('hr');

            let pg = document.createElement('p');
            pg.className = 'card-text text-end';
            pg.innerText = (data.food[0].wine[x].foodPrice);

            document.getElementById("wine").appendChild(firstDiv);
            firstDiv.appendChild(secondDiv);
            secondDiv.appendChild(imgF);
            secondDiv.appendChild(thirdDiv);
            thirdDiv.appendChild(title);
            thirdDiv.appendChild(elHr);
            thirdDiv.appendChild(pg);
        }
        
    })
    .catch(error => console.log(error));
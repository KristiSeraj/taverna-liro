fetch('js/food.json')
    .then(response => response.json())
    .then(data => {
        for(let i=0; i < data.food[0].antipasta.length; i++) {
            let li1 = document.createElement('li');
            let span1 = document.createElement('span');
            li1.className = 'list-group-item';
            li1.id = [i]
            li1.innerText = (data.food[0].antipasta[i].foodName);
            span1.className = 'span-li';
            span1.id = [i]
            span1.innerText = (data.food[0].antipasta[i].foodPrice);

            document.getElementById("food1").appendChild(li1);
            li1.appendChild(span1);
        }
        for(let x=0; x < data.food[0].firstPlate.length; x++) {
            let li2 = document.createElement('li');
            let span2 = document.createElement('span');
            li2.className = 'list-group-item';
            li2.id = [x];
            li2.innerText = (data.food[0].firstPlate[x].foodName);
            span2.className = 'span-li';
            span2.id = [x];
            span2.innerText = (data.food[0].firstPlate[x].foodPrice);

            document.getElementById("food2").appendChild(li2);
            li2.appendChild(span2);
        }
        for(let y=0; y < data.food[0].drinks.length; y++) {
            let li3 = document.createElement('li');
            let span3 = document.createElement('span');
            li3.className = 'list-group-item';
            li3.id = [y];
            li3.innerText = (data.food[0].drinks[y].foodName);
            span3.className = 'span-li';
            span3.id = [y];
            span3.innerText = (data.food[0].drinks[y].foodPrice);

            document.getElementById('food3').appendChild(li3);
            li3.appendChild(span3);
        }
        for(let j=0; j < data.food[0].beers.length; j++) {
            let li4 = document.createElement('li');
            let span4 = document.createElement('span');
            li4.className = 'list-group-item';
            li4.id = [j];
            li4.innerText = (data.food[0].beers[j].foodName);
            span4.className = 'span-li';
            span4.id = [j];
            span4.innerText = (data.food[0].beers[j].foodPrice);

            document.getElementById('food4').appendChild(li4);
            li4.appendChild(span4);
        }
        for(let k = 0; k < data.food[0].wine.length; k++) {
            let li5 = document.createElement('li');
            let span5 = document.createElement('span');
            li5.className = 'list-group-item';
            li5.id = [k];
            li5.innerText = (data.food[0].wine[k].foodName);
            span5.className = 'span-li';
            span5.id = [k];
            span5.innerText = (data.food[0].wine[k].foodPrice);

            document.getElementById('food5').appendChild(li5);
            li5.appendChild(span5);
            
        }
        
    })
    .catch(error => console.log(error));
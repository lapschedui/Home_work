(function () {

    function createMenuForm(container) {
        let form = document.createElement('form');
        let field = document.createElement('h3');
        let buttonWrapper = document.createElement('div');
        let level1 = document.createElement('button');
        let level2 = document.createElement('button');
        let level3 = document.createElement('button');
        let result;

        form.classList.add('form', 'mb-3');
        field.textContent = 'Выберите сложность игры';
        field.style.textAlign = 'center';
        buttonWrapper.classList.add('btn-group-vertical');
        buttonWrapper.style = 'display: flex', 'justify-content: center';
        level1.classList.add('btn', 'btn-outline-success');
        level1.style = 'width: 100%';
        level1.textContent = 'Поле 4х4';
        level2.classList.add('btn', 'btn-outline-warning');
        level2.style = 'width: 100%';
        level2.textContent = 'Поле 6х6';
        level3.classList.add('btn', 'btn-outline-danger');
        level3.style = 'width: 100%';
        level3.textContent = 'Поле 8х8';

        buttonWrapper.append(level1);
        buttonWrapper.append(level2);
        buttonWrapper.append(level3);
        form.append(field);

        container.append(form);
        container.append(buttonWrapper);

        level1.addEventListener('click', function () {
            result = 8;
            newGame(4, container);
        });

        level2.addEventListener('click', function () {
            result = 18;
            newGame(6, container);
        });

        level3.addEventListener('click', function () {
            result = 32;
            newGame(8, container);
        });

        function createmass(a) {
            let n = a * a / 2;
            let mass = [];
            for (m = 0; m < n; m++) {
                mass.push(m + 1);
                mass.push(m + 1);
            }

            for (let i = mass.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [mass[i], mass[j]] = [mass[j], mass[i]];
            }

            return mass;
        }

        function newGame(i, container) {
            container.replaceChildren();

            let mass = createmass(i);
            let argument = [];
            let counter = 0;

            let form = document.createElement('div');
            form.classList.add('row', 'width:100%');
            for (let a = 0; a < i; a++) {
                let column = document.createElement('div');
                column.classList.add('column');
                column.style.width = (100 / i) + '%';
                for (let b = 0; b < i; b++) {
                    let card = document.createElement('card');
                    card.textContent = mass[i * a + b];
                    card.id = counter++;
                    card.style.textAlign = 'center';
                    card.style.height = '0';
                    card.style.width = '50%';
                    card.style.paddingBottom = '50%';
                    card.style.margin = '0 auto';

                    if (i == 4) {
                        card.classList.add('card', 'text-success', 'bg-success', 'mb-4');
                        card.addEventListener('click', function () {
                            gameMechanics(argument, card, '500%', 'border-success', 'bg-light');
                        });
                    } else if (i == 6) {
                        card.classList.add('card', 'text-warning', 'bg-warning', 'mb-4');
                        card.addEventListener('click', function () {
                            gameMechanics(argument, card, '350%', 'border-warning', 'bg-light');
                        });
                    } else {
                        card.classList.add('card', 'text-danger', 'bg-danger', 'mb-4');
                        card.addEventListener('click', function () {
                            gameMechanics(argument, card, '250%', 'border-danger', 'bg-light');
                        });
                    }

                    column.append(card);
                }
                form.append(column);
            }
            container.append(form);
        }

        function gameMechanics(argument, card, size, class1, class2) {
            argument.push({ name: card.textContent, id: card.id, class: card.className });
            card.classList.add(class1, class2);
            card.style.fontSize = size;
            window.ariaDisabled = true;

            setTimeout(function () {
                if (argument.length == 2) {
                    if (argument[0].name === argument[1].name) {
                        let element = document.getElementById(argument[0].id);
                        element.className = "";
                        element.classList.add('card', 'mb-4', 'bg-white');
                        let element2 = document.getElementById(argument[1].id);
                        element2.className = "";
                        element2.classList.add('card', 'mb-4', 'bg-white');
                        result = winer(result);

                        argument.splice(0, argument.length);
                    } else {
                        let element = document.getElementById(argument[0].id);
                        element.className = argument[0].class;
                        let element2 = document.getElementById(argument[1].id);
                        element2.className = argument[1].class;

                        argument.splice(0, argument.length);
                    }
                    window.ariaDisabled = false;
                }
            }, 300);
        }

        function winer(result) {
            result--;
            if (result == 0) {
                container.replaceChildren();
                form.replaceChildren();
                let endGame = document.createElement('div');
                let formText = document.createElement('h1');
                let formDialog = document.createElement('h2');
                endGame.classList.add('form', 'bg-primary', 'mb-3');
                formText.textContent = 'И это победа! Мои поздравления!';
                formText.classList.add('text-info');
                formText.style.textAlign = 'center';
                formDialog.textContent = 'Вы можете сыргать еще, нажав на кнопку меню в левом верхнем углу)';
                formDialog.classList.add('text-info');
                formDialog.style.textAlign = 'center';

                form.append(formText);
                form.append(formDialog);
                container.append(form);
            }
            return result;
        }
    }

    window.createMenuForm = createMenuForm;
})();
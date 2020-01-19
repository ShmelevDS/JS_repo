let answer_checker = {
    getAndCheckAnswer(q, score) {
        user_answer = prompt('Введите порядковый номер верного по-вашему мнению ответа. Для выхода из игры введите любой текст.');
        if (user_answer == questionsDB.questions[q].correct_answer_ind) {
            console.log('Верный ответ!');
            score += 1
        } else if (isNaN(user_answer)) {
            console.log(`Игра окончена! Вы набрали ${score}/${config.numberOfQuestions} очков. Вопроов пропущено: ${config.numberOfQuestions - q}.`);
            return null;
        } else {
            console.log(`Вы не угадали! Верный ответ под номером ${questionsDB.questions[q].correct_answer_ind}`);
        }
    }
}
let mover = {
    getDirection() {
        const availableDirections = [2, 4, 6, 8, 1, 3, 7, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число, куда вы хотите переместиться (2 - вниз, 4 - влево, 6 - вправо, 8 - наверх, 1, 3, 7, 9 - по диагонали). Введите "Выход" для выхода из игры'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Вы ввели неверное направление, попробуйте снова!')
                continue;
            }
            return direction
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        
        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition
    }
}
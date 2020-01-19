let renderer = {
    map: '',

    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let column = 0; column < config.columnsCount; column++) {
                if (player.y === row && player.x === column) {
                    this.map += 'O ';
                } else {
                    this.map += 'X ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = '';
    }
}
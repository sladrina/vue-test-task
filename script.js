new Vue({
    el: '#app',
    data: {
        rows: [{
            name: 'Test1',
            desc: 'Test1',
            price: 1200
        }, {
            name: 'Test2',
            desc: 'Test2',
            price: 800
        }, {
            name: 'Test3',
            desc: 'Test3',
            price: 732
        }],
    },
    methods: {
        tableClick: function(event) {
            var input = event.target.querySelector("input");

            // Check if row whith input clicked
            if (input === null) {
                return;
            } else {
                event.target.classList.add("hidden-field");
                input.focus();
            }
        },
        updateValue: function(event) {
            event.target.parentNode.classList.remove("hidden-field");
        },
        addRow: function() {
            this.rows.push({
                name: "",
                desc: "",
                price: ""
            });
        },
        removeRow: function(row) {
            var index = this.rows.indexOf(row);
            this.rows.splice(index, 1);
        }
    },
    computed: {
        total: function() {
            var result = 0;
            this.rows.forEach(item => result += parseInt(item.price));
            if (!isNaN(result)) {
                return result;
            } else {
                return "Ошибка!";
            }
        }
    }
});
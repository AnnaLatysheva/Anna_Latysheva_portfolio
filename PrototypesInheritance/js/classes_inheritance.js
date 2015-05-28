//Abstract class Employee

var Employee = function () {
};
Employee.prototype = {
    getSalary: function () {
        throw new Error("abstract class!");
    }
};

//Concrete class Employee with fixed salary

EmployeeFixedSalary = function (id, name, salary) {
    this.type = 'FixedSalaryEmployee';
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.getSalary = function () {
        return salary;
    }
};

EmployeeFixedSalary.prototype = Object.create(Employee.prototype);


//Concrete class Employee with per hour salary

EmployeePerHourSalary = function (id, name, salary) {
    this.type = 'HourlySalaryEmployee';
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.getSalary = function () {
        var avgSalary = 20.8 * 8 * salary;
        return avgSalary;
    }
};
EmployeePerHourSalary.prototype = Object.create(Employee.prototype);


//Class Collection
    function CollectionEmployees() {
        this.list = new Array();
        this.flag = true;
        var _this = this;
        var add = function (arr) {
            for (var i = 0; i < arr.length; i++)
                switch (arr[i].type) {
                    case 'FixedSalaryEmployee':
                        try {
                            var employee = new EmployeeFixedSalary(arr[i].id, arr[i].name, arr[i].salary);
                        }
                        catch (err) {
                            alert('Wrong entry data');
                        }
                        _this.list.push(employee);
                        break;
                    case 'HourlySalaryEmployee':
                        try {
                            employee = new EmployeePerHourSalary(arr[i].id, arr[i].name, arr[i].salary);
                        }
                        catch (err) {
                            alert('Wrong entry data');
                        }
                        _this.list.push(employee);
                        break;
                    default :
                        throw new Error('This employee type does not exist');
                        break;
                }
        };
        this.get = function (type) {

            switch (type) {
                case 'text':
                    var json = document.getElementById('info').value;
                    try {
                        if (_this.list.length != 0) {
                            _this.list.length = 0;
                        }
                        var arr = JSON.parse(json);
                        add(arr);
                        _this.sort(arr);
                    }
                    catch (err) {
                        alert('Wrong entry data');
                    }
                    break;
                case 'server':
                    try {
                        if (_this.list.length != 0) {
                            _this.list.length = 0;
                        }


                        var xmlhttp = new XMLHttpRequest();

                        xmlhttp.open("GET", "json/employeesCollection.json", true);
                        xmlhttp.onreadystatechange = handleResponse;

                        xmlhttp.onload = function () {

                            _this.showEmployees();
                        };

                        xmlhttp.send(null);


                        function handleResponse() {
                            if (xmlhttp.readyState == 4) {
                                json = xmlhttp.responseText;
                                arr = JSON.parse(json);
                                add(arr);
                                _this.sort(arr);
                            }

                        }
                    }

                    catch (err) {
                        alert('Wrong entry data');
                    }
            }
        };

        this.showEmployees = function () {
            var displayEl = document.getElementById("control-panel");
            displayEl.innerHTML = "";
            for (var i = 0; i < _this.list.length; i++) {
                var newLi = document.createElement("li");
                newLi.innerHTML = "name: " + _this.list[i].name + " ,id: " + _this.list[i].id + " ,salary: " + _this.list[i].getSalary();
                displayEl.appendChild(newLi);
            }
        };

        this.showFirstNames = function () {
            var displayEl = document.getElementById("control-panel");
            displayEl.innerHTML = "";
            for (var i = 0; i < 5; i++) {
                var newLi = document.createElement("li");
                newLi.innerHTML = _this.list[i].name;

                displayEl.appendChild(newLi);
            }
        };
        this.showLastId = function () {
            var displayEl = document.getElementById("control-panel");
            displayEl.innerHTML = "";
            /*
             _this.list.reverse();
             _this.list.splice(3);
             _this.list.reverse();
             */
            for (var i = _this.list.length - 3; i < _this.list.length; i++) {
                var newLi = document.createElement("li");
                newLi.innerHTML = ' id ' + _this.list[i].id;
                displayEl.appendChild(newLi);
            }
        };
        this.sort = function () {
            var displayEl = document.getElementById("control-panel");
            displayEl.innerHTML = "";
            for (var i = 0; i < _this.list.length; i++) {
                for (var j = i + 1; j < _this.list.length; j++) {
                    if (_this.list[i].getSalary() < _this.list[j].getSalary()) {
                        if (_this.list[i].getSalary() == _this.list[j].getSalary()) {
                            if (_this.list[i].name.toUpperCase() < _this.list[j].name.toLocaleUpperCase()) {
                                var temp = _this.list[i];
                                _this.list[i] = _this.list[j];
                                _this.list[j] = temp;
                            }
                        }
                        temp = _this.list[i];
                        _this.list[i] = _this.list[j];
                        _this.list[j] = temp;
                    }
                }
            }
        }
    }

var l = new CollectionEmployees();


//methods call
function HoleCollection() {
    l.get('text');
    l.showEmployees();
    l.flag = true;
}

function showFirst() {
    l.showFirstNames();
}
function showLast() {
    l.showLastId();
}

function loadFromServer() {
    l.get('server');
    l.flag = false;
}

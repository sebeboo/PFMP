    var app = new Vue({
        el: '#app',
        mounted() {
            let vm = this
            axios
                .get('https://sheets.googleapis.com/v4/spreadsheets/1lmpMg7YRtLIe0k79s0pI0pcWLsq2kWNm5rP4b5Yc9s4/values/export!A2:E40?key=AIzaSyDxlPIPWkDlkzVkyQmWeEZxvP4J2FROvRs'
                )
                .then(function (response) {
                    let pfmp = response.data.values   
                    for (let index = 0; index < pfmp.length; index++) {
                        const element = pfmp[index];
                        let mitem = {
                            classe : element[0],
                            periode : element[1],
                            depart: element[2],
                            liaison : element[3],
                            convention : element[4]
                        }
                            vm.liste = vm.liste.concat(mitem)
                        }
                                    
           
                                                                 
                for (let i=0; i<40; i++){
    
                document.getElementById("liaison"+i).setAttribute("role", "progressbar");
                document.getElementById("liaison"+i).setAttribute("valuenow", vm.liste[i].liaison );
                document.getElementById("liaison"+i).setAttribute("style", "--value:" + vm.liste[i].liaison);
    
                document.getElementById("convention"+i).setAttribute("role", "progressbar");
                document.getElementById("convention"+i).setAttribute("valuenow", vm.liste[i].convention);
                document.getElementById("convention"+i).setAttribute("style", "--value:" + vm.liste[i].convention);
    
                document.getElementById(i+"jour").innerHTML = "J " + vm.liste[i].depart;
    
               }
                               
               })
        },
        data: {
            liste: [],
        },
        computed: {},
    });
    

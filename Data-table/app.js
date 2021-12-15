// var ArrayofObjects=[
//     {
//         'name':'Kiran','position':'react-developer', 'dob':'20-10-1998','place':'Udupi'
//     },

//     {
//         'name':'Kiran','position':'react-developer', 'dob':'20-10-1998','place':'Udupi'
//     },

//     {
//         'name':'Kiran','position':'react-developer', 'dob':'20-10-1998','place':'Udupi'
//     },

//     {
//         'name':'Kiran','position':'react-developer', 'dob':'20-10-1998','place':'Udupi'
//     },

// ]

// function insertTable(data){
//     let details=document.getElementById("details")
//     for(let i=0;i<data.length;i++){
//         let row=`<tr>
//         <td>${data[i].name}</td>
//         <td>${data[i].position}</td>
//         <td>${data[i].dob}</td>
//         <td>${data[i].place}</td>
//         <tr>
//         `
//         details.innerHTML +=row;
//     }

// }
// $(document).ready(function(){
//     $('#myTable').DataTable(insertTable(ArrayofObjects))

// })

// $(document).ready(() => {

//   window
//     .fetch("details.json")
//     .then((res) => {
//       return res.json();
//     })
//     .then((obj) => {
//       // console.log(obj);
//       let data = obj;
//       // console.log(typeof data)
//     //   let details = document.getElementById("details");

//       for (let i = 0; i < data.length; i++) {
//         console.log(data[i]);

//         $('tbody').append(`<tr>
//          <td>${data[i].name}</td>
//         <td>${data[i].position}</td>
//         <td>${data[i].dob}</td>
//          <td>${data[i].location}</td>
//          <tr>`);
//         } })
//     .catch((err) => {
//       console.log("Something went wrong");
//     });

//     $('#myTable').DataTable();
// });

$(document).ready(function () {
  $("#myTable").DataTable({
    ajax: "details.json",
    columns: [
      // {
      //   data: "id",
      // },
      {
        data: "name",
        orderable: false,
        // "bSortable": false,
      },
      {
        data: "position",
      },
      {
        data: "dob",
        // "bSortable": false,
        
        render: function (data) {
          let todayYear = new Date().getFullYear(); //2021
          let todayMonth = new Date().getMonth() + 1; //09

          let dobyear = data.substring(6, 10); //1998
          let dobmonth = data.substring(3, 5); //10

          resultYear = todayYear - dobyear; //23
          resultMonth = todayMonth - dobmonth; //-1

          // console.log(resultMonth);
          if (resultMonth < 0) {
            resultYear = resultYear - 1;
            resultMonth = resultMonth + 12;
          }
if(resultMonth<10){
  return  resultYear + "years 0" + resultMonth + " months";
}
          return resultYear + "years " + resultMonth + " months";
          // return data;
        },
      },

      // { data: "location" },

      { data: "email" ,
      render:function(data,type,row){
return `<div ><p>ID-${row.id}</p> <p> <i class="fas fa-map-marker-alt"></i> ${row.location}</p><p><i class="fas fa-envelope-square"></i>  ${data}</p></div>`

      }}
    ]
 

  });
  
});


// jQuery.fn.dataTableExt.oSort["dob"] = function (x, y) {
 
//   a=x.substring(1,3);
//   b=y.substring(1,3);
//   c=x.substring(9,11)
//   d=y.substring(9,11)
  

//   if(a==b){
//     if(c>=d){
//       return x<y;
//     }
//     else return x>y;
//   }
//   else if(a>=b){
//     return x>y;
//   }
//   else return x<y;
 

// }

// jQuery.fn.dataTableExt.oSort["dob-asc"] = function (x, y) {

//   a=x.substring(6,10);
//   b=y.substring(6,10);
//   c=x.substring(3,5)
//   d=y.substring(3,5)
  

//   if(a==b){
//     if(c>=d){
//       return x>y;
//     }
//     else return x<y;
//   }

// }
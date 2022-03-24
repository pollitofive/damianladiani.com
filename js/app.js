var app = new Vue({
    el: '#app',
    data:{
        data_feriados: [],
        items_menu_es: [
            {
                'id':'#about',
                'descripcion':'Sobre mi'
            },
            {
                'id':'#experience',
                'descripcion':'Experiencia'
            },
            {
                'id':'#education',
                'descripcion':'Educación'
            },
            {
                'id':'#skills',
                'descripcion':'Habilidades'
            },
            {
                'id':'#interests',
                'descripcion':'Intereses'
            },
            {
                'id':'../en/',
                'descripcion':'EN'
            },
        ],
        items_menu_en: [
            {
                'id':'#about',
                'descripcion':'About'
            },
            {
                'id':'#experience',
                'descripcion':'Experience'
            },
            {
                'id':'#education',
                'descripcion':'Education'
            },
            {
                'id':'#skills',
                'descripcion':'Skills'
            },
            {
                'id':'#interests',
                'descripcion':'Interests'
            },
            {
                'id':'../es/',
                'descripcion':'ES'
            },
        ]
    },
    methods: {
        /*traerFeriados: function(event)
        {
            //const data_feriados = axios.get( "http://localhost:8090/api/v1/feriados/2019", { data: "data" }, { headers: { "Access-Control-Allow-Origin": "*", } } ) .then(resp => (this.data_feriados = resp.data));

            let data = {}

            axios.get('http://localhost:8090/api/v1/feriados/2019').then(function (result) {

                console.log(result); // as in all examples it works well here, but it is not very helpful

                this.data_feriados = result.data; // LIST = , OR RETURN - no idea how to set list
            });

            console.log(this.data_feriados);
            //return data;

        }*/
    }
});
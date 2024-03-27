<template>
    <div>
        <h1>전화번호부</h1>

        <h2>수정폼</h2>

        <p>
            전화번호를 수정하려면<br>
            아래 항목을 기입하고 "수정" 버튼을 클릭하세요
        </p>

        <form v-on:submit.prevent="modify" action="" method="">
            <div>
                <label>이름: </label>
                <input type="text" name="name" v-model="phonebookVo.name">
            </div>

            <div>
                <label>핸드폰: </label>
                <input type="text" name="hp" v-model="phonebookVo.hp">
            </div>

            <div>
                <label>회사: </label>
                <input type="text" name="company" v-model="phonebookVo.company">
            </div>

            <button type="submit">수정</button>

        </form>

        <br><br>
        <router-link to="/list">리스트 이동</router-link>

    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: "modifyFormView",
    components: {},
    data() {
        return {
            phonebookVo:{
                name : "",
                hp : "",
                company : ""
            },
            personId : this.$route.params.personId

        };
    },
    methods: {
        modifyUser(){
            console.log("수정폼");
            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9000/api/phone/modify/'+ this.personId,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: this.phonebookVo.personId, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                this.phonebookVo = response.data;

            }).catch(error => {
                console.log(error);
            });
        },
        modify(){
            console.log("modify");
            axios({
                method: 'put',  //put,post,delete
                url: 'http://localhost:9000/api/phone/modify/'+ this.personId,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: phonebookVo, //get방식 파라미터로 값이 전달
                data: this.phonebookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                this.$router.push("/list");
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created(){
        this.modifyUser();
    }
};
</script>


<style></style>
<template >
    <main class="home ">
        <div class="container  h-full m-auto p-10 ">
            <div class="home-blog mt-10 flex justify-center  place-content-center p-10  gap-28 leading-9" v-for="item in homeBlog" :key="item">
                <div class="home-blog__left text-white h-64"> 
                    <h1 class="text-3xl font-bold"><span class="text-blue-700">{{item.cauntItem}}</span> -{{ item.cauntText }} </h1>
                    <p class="item mt-2">{{item.itemText}}</p>
                <div class="home-blog__left"></div>
          <div class="btn my-3 flex gap-5">      <button class="bg-black w-1/2 py-2">Kurslar</button>
            <button class="bg-blue-700 w-1/2  py-2"> Loyihalar</button></div>
                <span class="text-gray-600">{{item.spanText}}</span>
                </div>
                <div class="home-blog__right">
                    <img class="h-64" :src="item.images" alt="">
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            homeBlog:[
                {
                    cauntText:' dasturlash kurslari',
                    itemText:`Amaliy dasturlash kurslari bilan to'la platformaga xush kelibsiz. Bu erda siz barcha pullik kurslarni bepul o'rganishingiz mumkin.`,
                    cauntItem:'Smmi',
                    spanText:'* Kelajak hayotingiz uchun investitsiya qiling.',
                    images:'https://sammi.ac/react.svg'
                }
            ]
        }
    },
}
</script>
<style lang="scss">
    .home{
        .container{
        width: 1140px;
            .home-blog{
                background-color: #111827;
                .home-blog__left{
                    width: 50%;
                }
            }
        }
    }
</style>
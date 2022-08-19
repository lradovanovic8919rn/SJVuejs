import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    users: [],
    watches: [],
    storages: [],
    orders: [],
    stp:'',
    otp:'',
    wtp:'',
    utp:''

  },
  getters: {
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
    setUsers(state,u){
      state.users = u;
      console.log(state.users)
    },
    setWatches(state,w){
      state.watches = w;
      console.log(state.watches)
    },
    setStorages(state,s){
      state.storages = s;
      console.log(state.storages)
    },
    setOrders(state,o){
      state.orders = o;
    },
    setStp(state,val){
      state.stp=val
    },
    setUtp(state,val){
      state.utp=val
    },
    setOtp(state,val){
      state.otp=val
    },
    setWtp(state,val){
      state.wtp=val
    }
  },

  actions: {

    register({ commit }, obj) {
      fetch('http://127.0.0.1:10000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => commit('setToken', tkn.token) );
    },

    login({ commit }, obj) {
      fetch('http://127.0.0.1:10000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        console.log(tkn)
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
        
          commit('setToken', tkn.token)

        }
      });
    },
    getusers({ commit }){
      fetch('http://127.0.0.1:8000/admin/users',{
        headers: {
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
      .then( obj => obj.json() )
      .then( res => commit('setUsers', res) );
      
    },
    deleteusers({commit},uid,f){
      fetch(`http://127.0.0.1:8000/admin/users/${uid}`, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
    },
        body: JSON.stringify(f)
    })
    .then( res => res.json() )
    .then( data => {
      if (data.msg) {
        alert(data.msg);
    } else {
          fetch('http://127.0.0.1:8000/admin/users',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( resu => commit('setUsers', resu) );
      }
    });
    },

  /*  putusers({commit,state},obj){
      console.log(state.utp);
      fetch(`http://127.0.0.1:8000/admin/users/${state.utp}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
      },
          body: JSON.stringify(obj)
      })
      .then( res => res.json() )
      .then( data => {
        if (data.msg) {
          alert(data.msg);
      } else {
            fetch('http://127.0.0.1:8000/admin/users',{
              headers: {
                  'Authorization': `Bearer ${localStorage.token}`
              }
          })
            .then( obj => obj.json() )
            .then( resu => commit('setUsers', resu) );
        }
      });
    },*/
    getwatches({ commit }){
      fetch('http://127.0.0.1:8000/admin/watch',{
        headers: {
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
      .then( obj => obj.json() )
      .then( res => commit('setWatches', res) );
      
    },
    getorders({ commit }){
      fetch('http://127.0.0.1:8000/admin/order',{
        headers: {
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
      .then( obj => obj.json() )
      .then( res => commit('setOrders', res) );
      
    },
    getstorages({ commit }){
      fetch('http://127.0.0.1:8000/admin/storage',{
        headers: {
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
      .then( obj => obj.json() )
      .then( res => commit('setStorages', res) );
      
    },
    poststorages({commit},obj){
      fetch('http://127.0.0.1:8000/admin/storage', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`

            },
            body: JSON.stringify(obj)
        })
        .then( res => res.json() )
        .then( data => {
          if (data.msg) {
            alert(data.msg);
        } else {
          fetch('http://127.0.0.1:8000/admin/storage',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( res => commit('setStorages', res) );
          }
        });
    }, 
      postwatches({commit},obj){
        console.log(JSON.stringify(obj))
      fetch('http://127.0.0.1:8000/admin/watch', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`

            },
            body: JSON.stringify(obj)
        })
        .then( res => res.json() )
        .then( data => {
          if (data.msg) {
            alert(data.msg);
        } else {
          fetch('http://127.0.0.1:8000/admin/watch',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( res => commit('setWatches', res) );
          }
        });
    },
    postorders({commit},obj){
      fetch('http://127.0.0.1:8000/admin/order', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`

            },
            body: JSON.stringify(obj)
        })
        .then( res => res.json() )
        .then( data => {
          if (data.msg) {
            alert(data.msg);
        } else {
          fetch('http://127.0.0.1:8000/admin/order',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( res => commit('setOrders', res) );
          }
        });
    },

    deletestorages({commit},uid){
      console.log(uid)
      fetch(`http://127.0.0.1:8000/admin/storage/${uid}`, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
    },
    })
    .then( res => res.json() )
    .then( data => {
      if (data.msg) {
        alert(data.msg);
    } else {
          fetch('http://127.0.0.1:8000/admin/storage',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( resu => commit('setStorages', resu) );
      }
    });
    },
    deleteorders({commit},uid){
      fetch(`http://127.0.0.1:8000/admin/order/${uid}`, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
    },
    })
    .then( res => res.json() )
    .then( data => {
      if (data.msg) {
        alert(data.msg);
    } else {
          fetch('http://127.0.0.1:8000/admin/order',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( resu => commit('setOrders', resu) );
      }
    });
    },
    deletewatches({commit},uid){
      fetch(`http://127.0.0.1:8000/admin/watch/${uid}`, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
    },
    })
    .then( res => res.json() )
    .then( data => {
      if (data.msg) {
        alert(data.msg);
    } else {
          fetch('http://127.0.0.1:8000/admin/watch',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( resu => commit('setWatches', resu) );
      }
    });
    },
    putstorages({commit,state},obj){

      fetch(`http://127.0.0.1:8000/admin/storage/${state.stp}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
    },
        body: JSON.stringify(obj)
    })
    .then( res => res.json() )
    .then( data => {
      if (data.msg) {
        alert(data.msg);
    } else {
          fetch('http://127.0.0.1:8000/admin/storage',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( resu => commit('setStorages', resu) );
      }
    });
    },
    putorders({commit,state},obj){


      fetch(`http://127.0.0.1:8000/admin/order/${state.otp}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
    },
        body: JSON.stringify(obj)
    })
    .then( res => res.json() )
    .then( data => {
      if (data.msg) {
        alert(data.msg);
    } else {
          fetch('http://127.0.0.1:8000/admin/order',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( resu => commit('setOrders', resu) );
      }
    });
    },
    putusers({commit,state},obj){
      console.log(JSON.stringify(obj))
      console.log(state.utp)


      fetch(`http://127.0.0.1:8000/admin/users/${state.utp}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
    },
        body: JSON.stringify(obj)
    })
    .then( res => res.json() )
    .then( data => {
      if (data.msg) {
        alert(data.msg);
    } else {
          fetch('http://127.0.0.1:8000/admin/users',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( resu => commit('setUsers', resu) );
      }
    });
    },
    putwatches({commit,state},obj){

      fetch(`http://127.0.0.1:8000/admin/watch/${state.wtp}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
    },
        body: JSON.stringify(obj)
    })
    .then( res => res.json() )
    .then( data => {
      if (data.msg) {
        alert(data.msg);
    } else {
          fetch('http://127.0.0.1:8000/admin/watch',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
          .then( obj => obj.json() )
          .then( resu => commit('setWatches', resu) );
      }
    });
    },
    stpset({commit},v){
      commit('setStp',v)
    },
    utpset({commit},v){
      commit('setUtp',v)
    },
    otpset({commit},v){
      commit('setOtp',v)
    }
    ,
    wtpset({commit},v){
      commit('setWtp',v)
    }

  
  },



  modules: {
  }
})

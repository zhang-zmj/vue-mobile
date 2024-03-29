import {request} from './request';


//添加购物车
export function addCart(data) {
    return request({
        url:'/api/carts',
        method: 'post',
        data
    })
}


//获取购物车列表
export function getCart(data = '') {
    return request({
        url:'/api/carts?' + data,
        method: 'get'
    })
}



//修改购物车
export function modifyCart(id, data) {
    return request({
        url: `/api/carts/${id}`,
        method: 'put',
        data
    })
}


//选择商品的状态 checked， 所有选中的ID
export function checkedCard(data) {
    return request({
        url:'/api/carts/checked',
        method: 'patch',
        data
    })
}



// 删除购物车
export function deleteCartItem(id) {
    return request({
        url:`/api/carts/${id}`,
        method: 'delete'
    })
}





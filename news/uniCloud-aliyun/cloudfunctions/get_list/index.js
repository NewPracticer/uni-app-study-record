'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const{name} =event
	// const list = await db.collection('article')
	// .field({
	// 	content:false
	// })
	// .get()
	let matchObj = {}
	if(name !== '全部'){
		matchObj = {
			classify : name
		}
	}
	const list = await db.collection('article')
			.aggregate()
			// 追加字段
			.match(matchObj)
			.project({
				content:false
			})
			.end()
	//返回数据给客户端
	return {
		code:200,
		msg:'数据请求成功',
		data:list.data
	}
};

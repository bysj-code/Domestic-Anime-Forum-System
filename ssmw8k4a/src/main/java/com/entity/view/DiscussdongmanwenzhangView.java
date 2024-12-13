package com.entity.view;

import com.entity.DiscussdongmanwenzhangEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 动漫文章评论表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-03-04 22:04:45
 */
@TableName("discussdongmanwenzhang")
public class DiscussdongmanwenzhangView  extends DiscussdongmanwenzhangEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DiscussdongmanwenzhangView(){
	}
 
 	public DiscussdongmanwenzhangView(DiscussdongmanwenzhangEntity discussdongmanwenzhangEntity){
 	try {
			BeanUtils.copyProperties(this, discussdongmanwenzhangEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}

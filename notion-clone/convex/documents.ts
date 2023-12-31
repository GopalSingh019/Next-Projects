import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get =query({
    args:{parentDocument:v.optional(v.id('documents') ),
          isArchived:v.optional(v.boolean())
},
    handler:async(ctx,args)=>{
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error('Not Authenticated');
        }
        const userId = identity?.subject;
        if(!args.isArchived)
        var docs=await ctx.db.query('documents').filter((q) => q.and(q.eq(q.field("userId"), userId),q.eq(q.field("parentDocument"), args.parentDocument))).collect();
        else
        var docs=await ctx.db.query('documents').filter((q) => q.and(q.eq(q.field("userId"), userId),q.eq(q.field("isArchived"), args.isArchived))).collect();
        return docs;
    }
})

export const deleteTask = mutation({
    args: { id: v.id("documents") },
    handler: async (ctx, args) => {
      await ctx.db.delete(args.id);
    },
  });


export const createTask = mutation({
    args: {
        title: v.string(),
        parentDocument: v.optional(v.id("documents")),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error('Not Authenticated');
        }
        const userId = identity?.subject;

        const document = await ctx.db.insert("documents", {
            title: args.title,
            parentDocument: args.parentDocument,
            userId,
            isArchived: false,
            isPublished: false,
        });
        return document;
    },
});

export const updateTask = mutation({
    args: { id: v.id("documents"),isArchived:v.optional(v.boolean()),content:v.optional(v.string()),
    coverImage:v.optional(v.string()),
    isPublished:v.optional(v.boolean()),
    icon:v.optional(v.string()),
    title:v.optional(v.string()) },
    handler: async (ctx, args) => {
        const {id,...rest}=args;
      await ctx.db.patch(args.id, { ...rest } );

      },
  });

  export const DeleteTask = mutation({
    args: { id: v.id("documents"),parentDoc:v.optional(v.id('documents')) },
    handler: async (ctx, args) => {

       const result=await ctx.db.query('documents').filter((q)=>q.eq(q.field("parentDocument"), args.id)).collect();

       for (const item of result){
        await ctx.db.patch(item._id,{parentDocument:args.parentDoc})
       }
      await ctx.db.delete(args.id);

      },
  });

  export const SearchTask = query({
    args: { title: v.string() },
    handler: async (ctx, args) => {

        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error('Not Authenticated');
        }
       const userId = identity?.subject;
       const result=await ctx.db.query('documents').filter((q) => q.and(q.eq(q.field("userId"), userId),q.eq(q.field("title"), args.title))).collect();
       return result;
      },
  });

  export const getById =query({
    args:{id:v.optional(v.id('documents') )
},
    handler:async(ctx,args)=>{
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error('Not Authenticated');
        }
        const userId = identity?.subject;
        
        var docs=await ctx.db.query('documents').filter((q) => q.and(q.eq(q.field("userId"), userId),q.eq(q.field("_id"), args.id))).collect();
        return docs[0];
    }
})
export const readById =query({
    args:{id:v.optional(v.id('documents') )
},
    handler:async(ctx,args)=>{
        
        
        var docs=await ctx.db.query('documents').filter((q) => q.eq(q.field("_id"), args.id)).collect();
        return docs[0];
    }
})
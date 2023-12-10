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
    args: { id: v.id("documents"),isArchived:v.optional(v.boolean()) },
    handler: async (ctx, args) => {

        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error('Not Authenticated');
        }
        const userId = identity?.subject;
      await ctx.db.patch(args.id, { isArchived: args.isArchived } );

      },
  });
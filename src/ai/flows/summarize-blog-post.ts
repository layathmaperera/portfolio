'use server';
/**
 * @fileOverview Blog post summarization AI agent.
 *
 * - summarizeBlogPost - A function that handles the blog post summarization process.
 * - SummarizeBlogPostInput - The input type for the summarizeBlogPost function.
 * - SummarizeBlogPostOutput - The return type for the summarizeBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBlogPostInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The content of the blog post to be summarized.'),
});
export type SummarizeBlogPostInput = z.infer<typeof SummarizeBlogPostInputSchema>;

const SummarizeBlogPostOutputSchema = z.object({
  summary: z.string().describe('A brief summary of the blog post.'),
});
export type SummarizeBlogPostOutput = z.infer<typeof SummarizeBlogPostOutputSchema>;

export async function summarizeBlogPost(input: SummarizeBlogPostInput): Promise<SummarizeBlogPostOutput> {
  return summarizeBlogPostFlow(input);
}

const summarizeBlogPostPrompt = ai.definePrompt({
  name: 'summarizeBlogPostPrompt',
  input: {schema: SummarizeBlogPostInputSchema},
  output: {schema: SummarizeBlogPostOutputSchema},
  prompt: `You are an expert summarizer of blog posts.

  Please provide a concise summary of the following blog post content:

  {{blogPostContent}}`,
});

const summarizeBlogPostFlow = ai.defineFlow(
  {
    name: 'summarizeBlogPostFlow',
    inputSchema: SummarizeBlogPostInputSchema,
    outputSchema: SummarizeBlogPostOutputSchema,
  },
  async input => {
    const {output} = await summarizeBlogPostPrompt(input);
    return output!;
  }
);

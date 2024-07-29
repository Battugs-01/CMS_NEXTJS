"use client";
import { useState } from "react";
import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-store-modal";
import { toast } from "react-hot-toast";
import { Input } from "../ui/input";

const formSchema = z.object({
  name: z.string().min(1, "Must be at least 1 characters"),
  // description: z.string().min(10, "Must be at least 10 characters"),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/stores", values);
      toast.success("Success");
      window.location.assign(`/${response.data.id}`);
    } catch (error) {
      toast.error("Something went error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-0">
      <Modal
        isOpen={storeModal.isOpen}
        title="Create Store"
        description="Add a new store to manage products and categories."
        onClose={storeModal.onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="E-Commerce"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end">
                  <Button
                    variant="outline"
                    onClick={storeModal.onClose}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button disabled={loading} type="submit">
                    Continue
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

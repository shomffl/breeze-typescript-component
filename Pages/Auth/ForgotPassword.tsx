import React from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";

interface Props {
    status: string;
}

export default function ForgotPassword({ status }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.name as "email", event.target.value);
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Guest>
            <Head title="パスワードリセット" />

            <div className="mb-4 text-sm text-gray-500 leading-normal">
                メールアドレスを入力してください。パスワードリセット用のリンクを送ります。
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button
                        className="ml-4 bg-gray-900"
                        processing={processing}
                    >
                        パスワードのリセットリンクを送る
                    </Button>
                </div>
            </form>
        </Guest>
    );
}

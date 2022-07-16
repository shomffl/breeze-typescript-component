import React from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

interface Props {
    status: string;
}

export default function VerifyEmail({ status }: Props) {
    const { post, processing } = useForm();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <Guest>
            <Head title="メールアドレス確認" />

            <div className="mb-4 text-sm text-gray-600">
                登録ありがとうございます！届いたメールアドレスを確認してください。
                メールが届かない場合、下のボタンからメールを再送信してください。
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    登録されたメールアドレスに新しいメールを送信しました。
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button className="bg-gray-900" processing={processing}>
                        メール再送信
                    </Button>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        ログアウト
                    </Link>
                </div>
            </form>
        </Guest>
    );
}

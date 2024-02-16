import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Link href="/spelling">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:border-gray-300 hover:bg-gray-100">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Spelling</h3>
                  <p className="text-sm text-muted-foreground">
                    Practice! Practice! Practice!
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:border-gray-300 hover:bg-gray-100">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Conjugation of verbs</h3>
                <p className="text-sm">Coming soon!</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:border-gray-300 hover:bg-gray-100">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Storytelling</h3>
                <p className="text-sm text-muted-foreground">Coming soon!</p>
              </div>
            </div>
          </div>
        </div>
        <Link
            href="/login"
            className="flex rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Log in</span>
        </Link>
      </div>
    </>
  );
}

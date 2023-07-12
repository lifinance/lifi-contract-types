import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GnosisBridgeL2Facet, GnosisBridgeL2FacetInterface } from "../GnosisBridgeL2Facet";
declare type GnosisBridgeL2FacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GnosisBridgeL2Facet__factory extends ContractFactory {
    constructor(...args: GnosisBridgeL2FacetConstructorParams);
    deploy(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GnosisBridgeL2Facet>;
    getDeployTransaction(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GnosisBridgeL2Facet;
    connect(signer: Signer): GnosisBridgeL2Facet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200287038038062002870833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516127dc62000094600039600061063501526127dc6000f3fe6080604052600436106100295760003560e01c806302cba4a31461002e578063a9d0550f14610043575b600080fd5b61004161003c36600461229c565b610056565b005b6100416100513660046122d1565b610313565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761239a565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86600167ffffffffffffffff16808260e001511461027f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080890151899060009073ffffffffffffffffffffffffffffffffffffffff16156102d6576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102df8b6105e6565b5050505050505060004790508181111561030857610308600084610303858561239a565b6106cd565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161038e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061039f344761239a565b9050858061010001516103de576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561041c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761043f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610476576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104b4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104f1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88600167ffffffffffffffff16808260e001511461053b576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808b01518b9060009073ffffffffffffffffffffffffffffffffffffffff1615610592576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105a78d600001518e60c001518e8e33610703565b60c08e01526105b58d6105e6565b505050505050506000479050818111156105d9576105d9600084610303858561239a565b5050600090915550505050565b60c081015160a08201516040517f5d1e930700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691635d1e9307916024016000604051808303818588803b15801561067a57600080fd5b505af115801561068e573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516106c2919061241b565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316156106f9576106f483838361084b565b505050565b6106f482826109cd565b60008280820361073f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561074e60018561239a565b81811061075d5761075d61252e565b905060200281019061076f919061255d565b61078090608081019060600161259b565b9050600061078d82610af7565b905073ffffffffffffffffffffffffffffffffffffffff82166107b7576107b4348261239a565b90505b60006107c38888610bb0565b90506107cf8888610cbc565b6107dc8a89898985610d29565b6000826107e885610af7565b6107f2919061239a565b90508981101561083d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610898576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108e5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610952573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097691906125b6565b9050808211156109bc576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610834565b6109c78484846110db565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a1a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610a5d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610834565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610ab7576040519150601f19603f3d011682016040523d82523d6000602084013e610abc565b606091505b50509050806106f4576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610ba8576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba391906125b6565b610baa565b475b92915050565b60608160008167ffffffffffffffff811115610bce57610bce61202e565b604051908082528060200260200182016040528015610bf7578160200160208202803683370190505b5090506000805b83811015610cb157868682818110610c1857610c1861252e565b9050602002810190610c2a919061255d565b610c3b90608081019060600161259b565b9150610c4682610af7565b838281518110610c5857610c5861252e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ca95734838281518110610c9157610c9161252e565b60200260200101818151610ca5919061239a565b9052505b600101610bfe565b509095945050505050565b60005b818110156106f45736838383818110610cda57610cda61252e565b9050602002810190610cec919061255d565b9050610cfe60e0820160c083016125cf565b15610d2057610d20610d16606083016040840161259b565b82608001356111af565b50600101610cbf565b838383838260018114610ff65760008585610d4560018561239a565b818110610d5457610d5461252e565b9050602002810190610d66919061255d565b610d7790608081019060600161259b565b9050600089815b81811015610f2257368d8d83818110610d9957610d9961252e565b9050602002810190610dab919061255d565b9050610dda610dc0606083016040840161259b565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e3d5750610e3d610df3604083016020840161259b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e545750610e54610df3602083018361259b565b8015610ed95750610ed9610e6b60a08301836125ec565b610e7a91600491600091612658565b610e8391612682565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f0f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f198f82611325565b50600101610d7e565b505060005b610f3260018561239a565b811015610fee576000888883818110610f4d57610f4d61252e565b9050602002810190610f5f919061255d565b610f7090608081019060600161259b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fe557858281518110610fb757610fb761252e565b6020026020010151610fc882610af7565b610fd2919061239a565b92508215610fe557610fe58188856106cd565b50600101610f27565b5050506110cf565b8760005b818110156110cc57368b8b838181106110155761101561252e565b9050602002810190611027919061255d565b905061103c610dc0606083016040840161259b565b806110555750611055610df3604083016020840161259b565b801561106c575061106c610df3602083018361259b565b80156110835750611083610e6b60a08301836125ec565b6110b9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110c38d82611325565b50600101610ffa565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106f49084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261163b565b806000036111e9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611242578034101561123e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156112af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d391906125b6565b905081811015611319576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610834565b6106f48333308561174a565b61133b611335602083018361259b565b3b151590565b611371576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036113b1576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006113c6610dc0606085016040860161259b565b6113d15760006113d7565b82608001355b905060006113f36113ee606086016040870161259b565b610af7565b9050600061140a6113ee608087016060880161259b565b90508260000361144157611441611427606087016040880161259b565b611437604088016020890161259b565b8760800135611964565b846080013582101561148c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610834565b60008061149c602088018861259b565b73ffffffffffffffffffffffffffffffffffffffff16856114c060a08a018a6125ec565b6040516114ce9291906126ca565b60006040518083038185875af1925050503d806000811461150b576040519150601f19603f3d011682016040523d82523d6000602084013e611510565b606091505b50915091508161155b57600061152582611aa7565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083491906126da565b60006115706113ee60808a0160608b0161259b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896115a160208b018b61259b565b6115b160608c0160408d0161259b565b6115c160808d0160608e0161259b565b8c608001358987116115d357866115dd565b6115dd8a8861239a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b600061169d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b259092919063ffffffff16565b90508051600014806116be5750808060200190518101906116be91906126ed565b6106f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610834565b73ffffffffffffffffffffffffffffffffffffffff8416611797576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117e4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611855573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187991906125b6565b905061188782868686611b3c565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156118f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061191b91906125b6565b611925919061239a565b1461195c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661198457505050565b73ffffffffffffffffffffffffffffffffffffffff82166119d1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611a46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6a91906125b6565b10156106f457611a7c83836000611b9a565b6106f483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b9a565b6060604482511015611aec57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b086004808551611b00919061239a565b859190611d1c565b905080806020019051810190611b1e919061270a565b9392505050565b6060611b348484600085611e36565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526109c79085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161112d565b801580611c3a57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611c14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3891906125b6565b155b611cc6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610834565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106f49084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161112d565b606081611d2a81601f612781565b1015611d62576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d6c8284612781565b84511015611da6576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611dc55760405191506000825260208201604052611e2d565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611dfe578051835260209283019201611de6565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611ec8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610834565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ef19190612794565b60006040518083038185875af1925050503d8060008114611f2e576040519150601f19603f3d011682016040523d82523d6000602084013e611f33565b606091505b5091509150611f4487838387611f4f565b979650505050505050565b60608315611fe5578251600003611fde5773ffffffffffffffffffffffffffffffffffffffff85163b611fde576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610834565b5081611b34565b611b348383815115611ffa5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083491906126da565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120815761208161202e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120ce576120ce61202e565b604052919050565b600067ffffffffffffffff8211156120f0576120f061202e565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261212d57600080fd5b813561214061213b826120d6565b612087565b81815284602083860101111561215557600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461219657600080fd5b919050565b80151581146121a957600080fd5b50565b80356121968161219b565b600061014082840312156121ca57600080fd5b6121d261205d565b905081358152602082013567ffffffffffffffff808211156121f357600080fd5b6121ff8583860161211c565b6020840152604084013591508082111561221857600080fd5b506122258482850161211c565b60408301525061223760608301612172565b606082015261224860808301612172565b608082015261225960a08301612172565b60a082015260c082013560c082015260e082013560e08201526101006122808184016121ac565b908201526101206122928382016121ac565b9082015292915050565b6000602082840312156122ae57600080fd5b813567ffffffffffffffff8111156122c557600080fd5b611b34848285016121b7565b6000806000604084860312156122e657600080fd5b833567ffffffffffffffff808211156122fe57600080fd5b61230a878388016121b7565b9450602086013591508082111561232057600080fd5b818601915086601f83011261233457600080fd5b81358181111561234357600080fd5b8760208260051b850101111561235857600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610baa57610baa61236b565b60005b838110156123c85781810151838201526020016123b0565b50506000910152565b600081518084526123e98160208601602086016123ad565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124446101608501836123d1565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261247f83826123d1565b92505060608501516124a9608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061251c8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261259157600080fd5b9190910192915050565b6000602082840312156125ad57600080fd5b611b1e82612172565b6000602082840312156125c857600080fd5b5051919050565b6000602082840312156125e157600080fd5b8135611b1e8161219b565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261262157600080fd5b83018035915067ffffffffffffffff82111561263c57600080fd5b60200191503681900382131561265157600080fd5b9250929050565b6000808585111561266857600080fd5b8386111561267557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126c25780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611b1e60208301846123d1565b6000602082840312156126ff57600080fd5b8151611b1e8161219b565b60006020828403121561271c57600080fd5b815167ffffffffffffffff81111561273357600080fd5b8201601f8101841361274457600080fd5b805161275261213b826120d6565b81815285602083850101111561276757600080fd5b6127788260208301602086016123ad565b95945050505050565b80820180821115610baa57610baa61236b565b600082516125918184602087016123ad56fea26469706673582212205247ad289b763e061ff47d2883b6bf25a70d2d7b40bc04f4438e63ce2b2ca8e264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IXDaiBridgeL2";
            readonly name: "_xDaiBridge";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDestinationChain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSendingToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaXDaiBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }];
        readonly name: "swapAndStartBridgeTokensViaXDaiBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): GnosisBridgeL2FacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GnosisBridgeL2Facet;
}
export {};

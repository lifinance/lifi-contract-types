import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipFacet, GasZipFacetInterface } from "../GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620027e6380380620027e6833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161274c6200009a60003960008181608901526107cf015261274c6000f3fe60806040526004361061003f5760003560e01c806346fd98e214610044578063ba956b9a14610077578063c48b8bac146100d0578063f3412cda146100e5575b600080fd5b34801561005057600080fd5b5061006461005f366004611fa8565b6100f8565b6040519081526020015b60405180910390f35b34801561008357600080fd5b506100ab7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161006e565b6100e36100de36600461222b565b610143565b005b6100e36100f33660046122d7565b610407565b6000805b825181101561013d5782818151811061011757610117612326565b602002602001015160ff16600883901b179150808061013590612384565b9150506100fc565b50919050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101cf34476123bc565b90508680610100015161020e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561024c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861026f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156102a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610321576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037d89896103316001826123bc565b81811061034057610340612326565b905060200281019061035291906123cf565b61036390608081019060600161240d565b73ffffffffffffffffffffffffffffffffffffffff161590565b6103b3576040517ff029264900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c88a600001518b60c001518b8b3361066b565b60c08b01526103d78a886107b3565b5047915050818111156103f9576103f96000846103f485856123bc565b6108c7565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610482576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061049334476123bc565b9050846104b88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104ef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361052d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361056a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156105a8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105e6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608088015173ffffffffffffffffffffffffffffffffffffffff1615610638576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064288886107b3565b50479150508181111561065f5761065f6000846103f485856123bc565b50506000909155505050565b6000828082036106a7576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856106b66001856123bc565b8181106106c5576106c5612326565b90506020028101906106d791906123cf565b6106e890608081019060600161240d565b905060006106f5826108fd565b905073ffffffffffffffffffffffffffffffffffffffff821661071f5761071c34826123bc565b90505b600061072b88886109b6565b90506107378888610ac2565b6107448a89898985610b2f565b600082610750856108fd565b61075a91906123bc565b9050898110156107a5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60c082015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636e553f65908335610808604086016020870161240d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019290925273ffffffffffffffffffffffffffffffffffffffff1660248201526044016000604051808303818588803b15801561087357600080fd5b505af1158015610887573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108bb919061249d565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108f3576108ee838383610ec7565b505050565b6108ee8282611049565b600073ffffffffffffffffffffffffffffffffffffffff8216156109ae576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610985573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a991906125b0565b6109b0565b475b92915050565b60608160008167ffffffffffffffff8111156109d4576109d4611f00565b6040519080825280602002602001820160405280156109fd578160200160208202803683370190505b5090506000805b83811015610ab757868682818110610a1e57610a1e612326565b9050602002810190610a3091906123cf565b610a4190608081019060600161240d565b9150610a4c826108fd565b838281518110610a5e57610a5e612326565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610aaf5734838281518110610a9757610a97612326565b60200260200101818151610aab91906123bc565b9052505b600101610a04565b509095945050505050565b60005b818110156108ee5736838383818110610ae057610ae0612326565b9050602002810190610af291906123cf565b9050610b0460e0820160c083016125c9565b15610b2657610b26610b1c606083016040840161240d565b8260800135611173565b50600101610ac5565b838383838260018114610de25760008585610b4b6001856123bc565b818110610b5a57610b5a612326565b9050602002810190610b6c91906123cf565b610b7d90608081019060600161240d565b9050600089815b81811015610d0e57368d8d83818110610b9f57610b9f612326565b9050602002810190610bb191906123cf565b9050610bc6610363606083016040840161240d565b80610c295750610c29610bdf604083016020840161240d565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c405750610c40610bdf602083018361240d565b8015610cc55750610cc5610c5760a08301836125e6565b610c6691600491600091612652565b610c6f9161267c565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610cfb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d058f826112e9565b50600101610b84565b505060005b610d1e6001856123bc565b811015610dda576000888883818110610d3957610d39612326565b9050602002810190610d4b91906123cf565b610d5c90608081019060600161240d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610dd157858281518110610da357610da3612326565b6020026020010151610db4826108fd565b610dbe91906123bc565b92508215610dd157610dd18188856108c7565b50600101610d13565b505050610ebb565b8760005b81811015610eb857368b8b83818110610e0157610e01612326565b9050602002810190610e1391906123cf565b9050610e28610363606083016040840161240d565b80610e415750610e41610bdf604083016020840161240d565b8015610e585750610e58610bdf602083018361240d565b8015610e6f5750610e6f610c5760a08301836125e6565b610ea5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610eaf8d826112e9565b50600101610de6565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f14576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f61576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610fce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff291906125b0565b905080821115611038576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161079c565b6110438484846115c7565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611096576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110d9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161079c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611133576040519150601f19603f3d011682016040523d82523d6000602084013e611138565b606091505b50509050806108ee576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000036111ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112065780341015611202576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611273573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129791906125b0565b9050818110156112dd576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161079c565b6108ee8333308561169b565b6112ff6112f9602083018361240d565b3b151590565b611335576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611375576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061138a610363606085016040860161240d565b61139557600061139b565b82608001355b905060006113b76113b2606086016040870161240d565b6108fd565b905060006113ce6113b2608087016060880161240d565b905082600003611405576114056113eb606087016040880161240d565b6113fb604088016020890161240d565b87608001356118b5565b8460800135821015611450576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161079c565b600080611460602088018861240d565b73ffffffffffffffffffffffffffffffffffffffff168561148460a08a018a6125e6565b6040516114929291906126c4565b60006040518083038185875af1925050503d80600081146114cf576040519150601f19603f3d011682016040523d82523d6000602084013e6114d4565b606091505b5091509150816114e7576114e7816119f8565b60006114fc6113b260808a0160608b0161240d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961152d60208b018b61240d565b61153d60608c0160408d0161240d565b61154d60808d0160608e0161240d565b8c6080013589871161155f5786611569565b6115698a886123bc565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108ee9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a02565b73ffffffffffffffffffffffffffffffffffffffff84166116e8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611735576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156117a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ca91906125b0565b90506117d882868686611b11565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611848573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061186c91906125b0565b61187691906123bc565b146118ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118d557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611922576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611997573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119bb91906125b0565b10156108ee576119cd83836000611b6f565b6108ee83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b6f565b8051602082018181fd5b6000611a64826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cf19092919063ffffffff16565b9050805160001480611a85575080806020019051810190611a8591906126d4565b6108ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161079c565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110439085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611619565b801580611c0f57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611be9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c0d91906125b0565b155b611c9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161079c565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108ee9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611619565b6060611d008484600085611d08565b949350505050565b606082471015611d9a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161079c565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dc391906126f1565b60006040518083038185875af1925050503d8060008114611e00576040519150601f19603f3d011682016040523d82523d6000602084013e611e05565b606091505b5091509150611e1687838387611e21565b979650505050505050565b60608315611eb7578251600003611eb05773ffffffffffffffffffffffffffffffffffffffff85163b611eb0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161079c565b5081611d00565b611d008383815115611ecc5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079c9190612703565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f5357611f53611f00565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611fa057611fa0611f00565b604052919050565b60006020808385031215611fbb57600080fd5b823567ffffffffffffffff80821115611fd357600080fd5b818501915085601f830112611fe757600080fd5b813581811115611ff957611ff9611f00565b8060051b915061200a848301611f59565b818152918301840191848101908884111561202457600080fd5b938501935b83851015612055578435925060ff831683146120455760008081fd5b8282529385019390850190612029565b98975050505050505050565b600082601f83011261207257600080fd5b813567ffffffffffffffff81111561208c5761208c611f00565b6120bd60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611f59565b8181528460208386010111156120d257600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461211357600080fd5b919050565b801515811461212657600080fd5b50565b803561211381612118565b6000610140828403121561214757600080fd5b61214f611f2f565b905081358152602082013567ffffffffffffffff8082111561217057600080fd5b61217c85838601612061565b6020840152604084013591508082111561219557600080fd5b506121a284828501612061565b6040830152506121b4606083016120ef565b60608201526121c5608083016120ef565b60808201526121d660a083016120ef565b60a082015260c082013560c082015260e082013560e08201526101006121fd818401612129565b9082015261012061220f838201612129565b9082015292915050565b60006040828403121561013d57600080fd5b6000806000806080858703121561224157600080fd5b843567ffffffffffffffff8082111561225957600080fd5b61226588838901612134565b9550602087013591508082111561227b57600080fd5b818701915087601f83011261228f57600080fd5b81358181111561229e57600080fd5b8860208260051b85010111156122b357600080fd5b6020830195508094505050506122cc8660408701612219565b905092959194509250565b600080606083850312156122ea57600080fd5b823567ffffffffffffffff81111561230157600080fd5b61230d85828601612134565b92505061231d8460208501612219565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123b5576123b5612355565b5060010190565b818103818111156109b0576109b0612355565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261240357600080fd5b9190910192915050565b60006020828403121561241f57600080fd5b612428826120ef565b9392505050565b60005b8381101561244a578181015183820152602001612432565b50506000910152565b6000815180845261246b81602086016020860161242f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124c6610160850183612453565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125018382612453565b925050606085015161252b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061259e8187018315159052565b90950151151593019290925250919050565b6000602082840312156125c257600080fd5b5051919050565b6000602082840312156125db57600080fd5b813561242881612118565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261261b57600080fd5b83018035915067ffffffffffffffff82111561263657600080fd5b60200191503681900382131561264b57600080fd5b9250929050565b6000808585111561266257600080fd5b8386111561266f57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126bc5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156126e657600080fd5b815161242881612118565b6000825161240381846020870161242f565b602081526000612428602083018461245356fea2646970667358221220ed838702d68cbd83fb9fb5e37fbc2c03e02ffd3b9ca9b9caef37cc30ccafd67464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDestinationChainsValue";
        readonly inputs: readonly [{
            readonly name: "_chainIds";
            readonly type: "uint8[]";
            readonly internalType: "uint8[]";
        }];
        readonly outputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlySwapsFromERC20ToNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};

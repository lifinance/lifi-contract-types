import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CelerCircleBridgeFacet, CelerCircleBridgeFacetInterface } from "../CelerCircleBridgeFacet";
declare type CelerCircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CelerCircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CelerCircleBridgeFacetConstructorParams);
    deploy(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CelerCircleBridgeFacet>;
    getDeployTransaction(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CelerCircleBridgeFacet;
    connect(signer: Signer): CelerCircleBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801562000010575f80fd5b506040516200276c3803806200276c833981016040819052620000339162000063565b6001600160a01b039182166080521660a052620000a0565b6001600160a01b038116811462000060575f80fd5b50565b5f806040838503121562000075575f80fd5b825162000082816200004b565b602084015190925062000095816200004b565b809150509250929050565b60805160a051612687620000e55f395f818161023f015281816105020152818161058f015281816107df015261089601525f818161080001526108be01526126875ff3fe608060405260043610610028575f3560e01c80638fab06631461002c578063bab657d814610041575b5f80fd5b61003f61003a3660046121c1565b610060565b005b34801561004c575f80fd5b5061003f61005b366004612253565b610318565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100db576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100eb3447612292565b90508580610100015161012a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610168576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361023c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102c7576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102db8b5f01518c60c001518c8c336105d5565b60c08c01526102e98b610718565b504793505050508181111561030c5761030c5f846103078585612292565b610963565b50505f90915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610393576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103a0826122ca565b806101000151156103dd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e6836122ca565b80610120015115610423576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61042c846122ca565b60a081015173ffffffffffffffffffffffffffffffffffffffff1661047d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610500856122ca565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461058a576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b87f00000000000000000000000000000000000000000000000000000000000000008860c00135610999565b6105c96105c4886122ca565b610718565b50505f90935550505050565b5f82808203610610576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561061e600185612292565b81811061062d5761062d6122d5565b905060200281019061063f9190612302565b61065090608081019060600161233e565b90505f61065c82610b0b565b905073ffffffffffffffffffffffffffffffffffffffff8216610686576106833482612292565b90505b5f6106918888610bc1565b905061069d8888610ccb565b6106aa8a89898985610d37565b5f826106b585610b0b565b6106bf9190612292565b90508981101561070a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60e081015167ffffffffffffffff10156107da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f5f627269646765446174612e64657374696e6174696f6e436861696e4964207060448201527f617373656420697320746f6f2062696720746f2066697420696e2075696e743660648201527f3400000000000000000000000000000000000000000000000000000000000000608482015260a401610701565b6108297f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c001516110e1565b60c081015160e082015160a08301516040517f2fbb00ac000000000000000000000000000000000000000000000000000000008152600481019390935267ffffffffffffffff909116602483015273ffffffffffffffffffffffffffffffffffffffff90811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001690632fbb00ac906084016020604051808303815f875af1158015610904573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109289190612357565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161095891906123e9565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83161561098f5761098a838383611216565b505050565b61098a8282611395565b805f036109d2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a2b5780341015610a27576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a95573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ab991906124fb565b905081811015610aff576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610701565b61098a833330856114bb565b5f73ffffffffffffffffffffffffffffffffffffffff821615610bb9576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b90573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bb491906124fb565b610bbb565b475b92915050565b6060815f8167ffffffffffffffff811115610bde57610bde611f9f565b604051908082528060200260200182016040528015610c07578160200160208202803683370190505b5090505f805b83811015610cc057868682818110610c2757610c276122d5565b9050602002810190610c399190612302565b610c4a90608081019060600161233e565b9150610c5582610b0b565b838281518110610c6757610c676122d5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cb85734838281518110610ca057610ca06122d5565b60200260200101818151610cb49190612292565b9052505b600101610c0d565b509095945050505050565b5f5b8181101561098a5736838383818110610ce857610ce86122d5565b9050602002810190610cfa9190612302565b9050610d0c60e0820160c08301612512565b15610d2e57610d2e610d24606083016040840161233e565b8260800135610999565b50600101610ccd565b838383838260018114610ffd575f8585610d52600185612292565b818110610d6157610d616122d5565b9050602002810190610d739190612302565b610d8490608081019060600161233e565b90505f89815b81811015610f2b57368d8d83818110610da557610da56122d5565b9050602002810190610db79190612302565b9050610de6610dcc606083016040840161233e565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e485750610e48610dff604083016020840161233e565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e5f5750610e5f610dff602083018361233e565b8015610ee25750610ee2610e7660a083018361252d565b610e84916004915f91612595565b610e8d916125bc565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f18576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f228f826116d0565b50600101610d8a565b50505f5b610f3a600185612292565b811015610ff5575f888883818110610f5457610f546122d5565b9050602002810190610f669190612302565b610f7790608081019060600161233e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fec57858281518110610fbe57610fbe6122d5565b6020026020010151610fcf82610b0b565b610fd99190612292565b92508215610fec57610fec818885610963565b50600101610f2f565b5050506110d5565b875f5b818110156110d257368b8b8381811061101b5761101b6122d5565b905060200281019061102d9190612302565b9050611042610dcc606083016040840161233e565b8061105b575061105b610dff604083016020840161233e565b80156110725750611072610dff602083018361233e565b80156110895750611089610e7660a083018361252d565b6110bf576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110c98d826116d0565b50600101611000565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661110157505050565b73ffffffffffffffffffffffffffffffffffffffff821661114e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156111c1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111e591906124fb565b101561098a5761098a83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119a3565b73ffffffffffffffffffffffffffffffffffffffff8316611263576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112b0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561131a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061133e91906124fb565b905080821115611384576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610701565b61138f848484611b10565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166113e2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611425576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610701565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461147b576040519150601f19603f3d011682016040523d82523d5f602084013e611480565b606091505b505090508061098a576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611508576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611555576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa1580156115c3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115e791906124fb565b90506115f582868686611b66565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611663573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061168791906124fb565b6116919190612292565b146116c8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6116e66116e0602083018361233e565b3b151590565b61171c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361175b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61176f610dcc606085016040860161233e565b611779575f61177f565b82608001355b90505f61179a611795606086016040870161233e565b610b0b565b90505f6117b0611795608087016060880161233e565b9050825f036117e6576117e66117cc606087016040880161233e565b6117dc604088016020890161233e565b87608001356110e1565b8460800135821015611831576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610701565b5f80611840602088018861233e565b73ffffffffffffffffffffffffffffffffffffffff168561186460a08a018a61252d565b604051611872929190612604565b5f6040518083038185875af1925050503d805f81146118ac576040519150601f19603f3d011682016040523d82523d5f602084013e6118b1565b606091505b5091509150816118c4576118c481611bc4565b5f6118d861179560808a0160608b0161233e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961190960208b018b61233e565b61191960608c0160408d0161233e565b61192960808d0160608e0161233e565b8c6080013589871161193b5786611945565b6119458a88612292565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611a2f8482611bce565b61138f5760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611b069085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c89565b61138f8482611c89565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261098a9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a84565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261138f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a84565b8051602082018181fd5b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611bf69190612613565b5f604051808303815f865af19150503d805f8114611c2f576040519150601f19603f3d011682016040523d82523d5f602084013e611c34565b606091505b5091509150818015611c5e575080511580611c5e575080806020019051810190611c5e9190612624565b8015611c80575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f611cea826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d969092919063ffffffff16565b905080515f1480611d0a575080806020019051810190611d0a9190612624565b61098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610701565b6060611da484845f85611dac565b949350505050565b606082471015611e3e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610701565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611e669190612613565b5f6040518083038185875af1925050503d805f8114611ea0576040519150601f19603f3d011682016040523d82523d5f602084013e611ea5565b606091505b5091509150611eb687838387611ec1565b979650505050505050565b60608315611f565782515f03611f4f5773ffffffffffffffffffffffffffffffffffffffff85163b611f4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610701565b5081611da4565b611da48383815115611f6b5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610701919061263f565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ff057611ff0611f9f565b60405290565b5f82601f830112612005575f80fd5b813567ffffffffffffffff8082111561202057612020611f9f565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561206657612066611f9f565b8160405283815286602085880101111561207e575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120c0575f80fd5b919050565b80151581146120d2575f80fd5b50565b80356120c0816120c5565b5f61014082840312156120f1575f80fd5b6120f9611fcc565b905081358152602082013567ffffffffffffffff80821115612119575f80fd5b61212585838601611ff6565b6020840152604084013591508082111561213d575f80fd5b5061214a84828501611ff6565b60408301525061215c6060830161209d565b606082015261216d6080830161209d565b608082015261217e60a0830161209d565b60a082015260c082013560c082015260e082013560e08201526101006121a58184016120d5565b908201526101206121b78382016120d5565b9082015292915050565b5f805f604084860312156121d3575f80fd5b833567ffffffffffffffff808211156121ea575f80fd5b6121f6878388016120e0565b9450602086013591508082111561220b575f80fd5b818601915086601f83011261221e575f80fd5b81358181111561222c575f80fd5b8760208260051b8501011115612240575f80fd5b6020830194508093505050509250925092565b5f60208284031215612263575f80fd5b813567ffffffffffffffff811115612279575f80fd5b8201610140818503121561228b575f80fd5b9392505050565b81810381811115610bbb577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610bbb36836120e0565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612334575f80fd5b9190910192915050565b5f6020828403121561234e575f80fd5b61228b8261209d565b5f60208284031215612367575f80fd5b815167ffffffffffffffff8116811461228b575f80fd5b5f5b83811015612398578181015183820152602001612380565b50505f910152565b5f81518084526123b781602086016020860161237e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201525f60208301516101408060408501526124116101608501836123a0565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261244c83826123a0565b9250506060850151612476608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124e98187018315159052565b90950151151593019290925250919050565b5f6020828403121561250b575f80fd5b5051919050565b5f60208284031215612522575f80fd5b813561228b816120c5565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612560575f80fd5b83018035915067ffffffffffffffff82111561257a575f80fd5b60200191503681900382131561258e575f80fd5b9250929050565b5f80858511156125a3575f80fd5b838611156125af575f80fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156125fc5780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f825161233481846020870161237e565b5f60208284031215612634575f80fd5b815161228b816120c5565b602081525f61228b60208301846123a056fea2646970667358221220c0fbbe3bc7e0d7e4dcd4bee20d417edf2a0d4bfea7b5a07607df52d07636937f64736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_circleBridgeProxy";
            readonly type: "address";
            readonly internalType: "contract ICircleBridgeProxy";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCelerCircleBridge";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaCelerCircleBridge";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
        readonly name: "InvalidSendingToken";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): CelerCircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerCircleBridgeFacet;
}
export {};

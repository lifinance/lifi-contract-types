import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PolymerCCTPFacet, PolymerCCTPFacetInterface } from "../PolymerCCTPFacet";
type PolymerCCTPFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolymerCCTPFacet__factory extends ContractFactory {
    constructor(...args: PolymerCCTPFacetConstructorParams);
    deploy(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, _polymerFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PolymerCCTPFacet>;
    getDeployTransaction(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, _polymerFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PolymerCCTPFacet;
    connect(signer: Signer): PolymerCCTPFacet__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b5060405162002607380380620026078339810160408190526200003491620000c4565b60016000556001600160a01b03831615806200005757506001600160a01b038216155b806200006a57506001600160a01b038116155b1562000089576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0392831660805290821660a0521660c0526200010e565b80516001600160a01b0381168114620000bf57600080fd5b919050565b600080600060608486031215620000da57600080fd5b620000e584620000a7565b9250620000f560208501620000a7565b91506200010560408501620000a7565b90509250925092565b60805160a05160c05161247d6200018a60003960008181610103015261082e01526000818160a60152818161021001528181610403015281816104fb015281816106040152818161080d015281816109580152610aca015260008181610137015281816103b5015281816108f30152610a7b015261247d6000f3fe6080604052600436106100655760003560e01c80638eb8fd56116100435780638eb8fd56146100f1578063b8b32ff714610125578063f3156a2d1461015957600080fd5b80634019dcea1461006a578063895359be1461007f57806389a3027114610094575b600080fd5b61007d610078366004611f65565b610179565b005b34801561008b57600080fd5b5061007d610370565b3480156100a057600080fd5b506100c87f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100fd57600080fd5b506100c87f000000000000000000000000000000000000000000000000000000000000000081565b34801561013157600080fd5b506100c87f000000000000000000000000000000000000000000000000000000000000000081565b34801561016557600080fd5b5061007d610174366004612011565b610473565b61018161064d565b33600061018e344761208f565b905085838160c001516000036101d0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e001510361020d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b877f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610298576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b898061010001516102d5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a80610120015115610313576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103288c600001518d60c001518d8d336106c5565b60c08d01526103378c8a610808565b5047945050505082821115905061035d5761035d600084610358858561208f565b610d3d565b50505061036a6001600055565b50505050565b610378610d72565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af115801561044c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047091906120a2565b50565b61047b61064d565b81818160c001516000036104bb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036104f8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b837f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610583576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156105c1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105ff576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61062f7f000000000000000000000000000000000000000000000000000000000000000033308b60c00151610de7565b6106398888610808565b5050505050506106496001600055565b5050565b6002600054036106be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600055565b600082808203610701576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561071060018561208f565b81811061071f5761071f6120c6565b905060200281019061073191906120f5565b610742906080810190606001612133565b9050600061074f82610ea3565b905073ffffffffffffffffffffffffffffffffffffffff821661077957610776348261208f565b90505b60006107858888610eee565b90506107918888611002565b61079e8a8989898561106f565b6000826107aa85610ea3565b6107b4919061208f565b9050898110156107fa576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016106b5565b9a9950505050505050505050565b6108547f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000083356112bc565b60c08201516000906108689083359061208f565b60a084015190915073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114610a3e5760a083015173ffffffffffffffffffffffffffffffffffffffff166108f1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee8261093b8660e0015161132a565b60a087015173ffffffffffffffffffffffffffffffffffffffff167f00000000000000000000000000000000000000000000000000000000000000006000602089013561098e60808b0160608c0161214e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e401600060405180830381600087803b158015610a2157600080fd5b505af1158015610a35573d6000803e3d6000fd5b50505050610bf3565b6040820135610a79576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee82610ac38660e0015161132a565b60408601357f000000000000000000000000000000000000000000000000000000000000000060006020890135610b0060808b0160608c0161214e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e401600060405180830381600087803b158015610b9357600080fd5b505af1158015610ba7573d6000803e3d6000fd5b505050508260e0015183600001517f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c8460400135604051610bea91815260200190565b60405180910390a35b60c08301517f324bb680d8f34b685b89431a2429f01c9b71c00ab9a18e3ad887c464200f1c5b908335610c2c608086016060870161214e565b60408051938452602084019290925263ffffffff169082015260600160405180910390a17fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1604051806101400160405280856000015181526020018560200151815260200185604001518152602001856060015173ffffffffffffffffffffffffffffffffffffffff168152602001856080015173ffffffffffffffffffffffffffffffffffffffff1681526020018560a0015173ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018560e001518152602001856101000151151581526020018561012001511515815250604051610d3091906121d8565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d6757610d628282611480565b505050565b610d628383836112bc565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610de5576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b73ffffffffffffffffffffffffffffffffffffffff8416610e34576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e81576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61036a73ffffffffffffffffffffffffffffffffffffffff85168484846114ed565b600073ffffffffffffffffffffffffffffffffffffffff821615610ee657610ee173ffffffffffffffffffffffffffffffffffffffff83163061154a565b610ee8565b475b92915050565b60608160008167ffffffffffffffff811115610f0c57610f0c611d22565b604051908082528060200260200182016040528015610f35578160200160208202803683370190505b5090506000805b83811015610ff757868682818110610f5657610f566120c6565b9050602002810190610f6891906120f5565b610f79906080810190606001612133565b9150610f8482610ea3565b838281518110610f9657610f966120c6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fe75734838281518110610fcf57610fcf6120c6565b60200260200101818151610fe3919061208f565b9052505b610ff0816122eb565b9050610f3c565b509095945050505050565b60005b81811015610d625736838383818110611020576110206120c6565b905060200281019061103291906120f5565b905061104460e0820160c08301612323565b156110665761106661105c6060830160408401612133565b826080013561157f565b50600101611005565b8383838382600080805b8381101561129f57368c8c83818110611094576110946120c6565b90506020028101906110a691906120f5565b90506110b56020820182612133565b93506110c76040820160208301612133565b925061116c846110da60a0840184612340565b6110e9916004916000916123ac565b6110f2916123d6565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061125557506111a06111866060830160408401612133565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156111d957508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611255575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561128c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112968e82611630565b50600101611079565b505050506112b18484848460006118ad565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611309576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d6273ffffffffffffffffffffffffffffffffffffffff84168383611ad3565b60008160010361133c57506000919050565b8161a86a0361134d57506001919050565b81600a0361135d57506002919050565b8161a4b10361136e57506003919050565b660416edef1601be820361138457506005919050565b816121050361139557506006919050565b816089036113a557506007919050565b816082036113b55750600a919050565b8161e708036113c65750600b919050565b8162013d48036113d85750600c919050565b816092036113e85750600d919050565b816101e0036113f95750600e919050565b816105310361140a57506010919050565b8160320361141a57506012919050565b816103e70361142b57506013919050565b8161def10361143c57506015919050565b81620182320361144e57506016919050565b6040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114cd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064973ffffffffffffffffffffffffffffffffffffffff831682611b22565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661153c57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b806000036115b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661160e5780341015610649576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064973ffffffffffffffffffffffffffffffffffffffff83163330846114ed565b6116486116406020830183612133565b6017903b1190565b61167e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116be576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006116d36111866060850160408601612133565b6116de5760006116e4565b82608001355b905060006117006116fb6080860160608701612133565b610ea3565b9050816000036117375761173761171d6060860160408701612133565b61172d6040870160208801612133565b8660800135611b3e565b6000806117476020870187612133565b73ffffffffffffffffffffffffffffffffffffffff168461176b60a0890189612340565b60405161177992919061241e565b60006040518083038185875af1925050503d80600081146117b6576040519150601f19603f3d011682016040523d82523d6000602084013e6117bb565b606091505b5091509150816117ce576117ce81611b6a565b60006117e36116fb6080890160608a01612133565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861181460208a018a612133565b61182460608b0160408c01612133565b61183460808c0160608d01612133565b8b608001358987116118465786611850565b6118508a8861208f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b83600086826118bd60018261208f565b8181106118cc576118cc6120c6565b90506020028101906118de91906120f5565b6118ef906080810190606001612133565b905060008060008060008060005b88811015611ac35761191060018a61208f565b8110801561191f575088600114155b156119fb578d8d82818110611936576119366120c6565b905060200281019061194891906120f5565b611959906080810190606001612133565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146119fb578a81815181106119a0576119a06120c6565b60200260200101516119b187610ea3565b6119bb919061208f565b965073ffffffffffffffffffffffffffffffffffffffff8616156119e05760006119e2565b895b9350838711156119fb576119fb868d610358878b61208f565b8d8d82818110611a0d57611a0d6120c6565b9050602002810190611a1f91906120f5565b611a30906060810190604001612133565b9450611a3b85610ea3565b925073ffffffffffffffffffffffffffffffffffffffff851615611a60576000611a62565b895b91508183118015611a9f57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611ab357611ab3858d610358858761208f565b611abc816122eb565b90506118fd565b5050505050505050505050505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611b18576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af16106495763b12d13eb6000526004601cfd5b610d628383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b74565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561036a5773ffffffffffffffffffffffffffffffffffffffff8316611bdd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c76919061242e565b101561036a5761036a73ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611b185760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611b1857633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611d7557611d75611d22565b60405290565b600082601f830112611d8c57600080fd5b813567ffffffffffffffff80821115611da757611da7611d22565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ded57611ded611d22565b81604052838152866020858801011115611e0657600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e4a57600080fd5b919050565b801515811461047057600080fd5b8035611e4a81611e4f565b60006101408284031215611e7b57600080fd5b611e83611d51565b905081358152602082013567ffffffffffffffff80821115611ea457600080fd5b611eb085838601611d7b565b60208401526040840135915080821115611ec957600080fd5b50611ed684828501611d7b565b604083015250611ee860608301611e26565b6060820152611ef960808301611e26565b6080820152611f0a60a08301611e26565b60a082015260c082013560c082015260e082013560e0820152610100611f31818401611e5d565b90820152610120611f43838201611e5d565b9082015292915050565b600060808284031215611f5f57600080fd5b50919050565b60008060008060c08587031215611f7b57600080fd5b843567ffffffffffffffff80821115611f9357600080fd5b611f9f88838901611e68565b95506020870135915080821115611fb557600080fd5b818701915087601f830112611fc957600080fd5b813581811115611fd857600080fd5b8860208260051b8501011115611fed57600080fd5b6020830195508094505050506120068660408701611f4d565b905092959194509250565b60008060a0838503121561202457600080fd5b823567ffffffffffffffff81111561203b57600080fd5b61204785828601611e68565b9250506120578460208501611f4d565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ee857610ee8612060565b6000602082840312156120b457600080fd5b81516120bf81611e4f565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261212957600080fd5b9190910192915050565b60006020828403121561214557600080fd5b6120bf82611e26565b60006020828403121561216057600080fd5b813563ffffffff811681146120bf57600080fd5b6000815180845260005b8181101561219a5760208185018101518683018201520161217e565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152612201610160850183612174565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261223c8382612174565b9250506060850151612266608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206122d98187018315159052565b90950151151593019290925250919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361231c5761231c612060565b5060010190565b60006020828403121561233557600080fd5b81356120bf81611e4f565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261237557600080fd5b83018035915067ffffffffffffffff82111561239057600080fd5b6020019150368190038213156123a557600080fd5b9250929050565b600080858511156123bc57600080fd5b838611156123c957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156124165780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561244057600080fd5b505191905056fea2646970667358221220fd0d60bdb07977bd8caf896e8ac14f4a9276c0c4225d924db97baca68b5e031364736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_tokenMessenger";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_polymerFeeReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "POLYMER_FEE_RECEIVER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "TOKEN_MESSENGER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ITokenMessenger";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "USDC";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initPolymerCCTP";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPolymerCCTP";
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
            readonly name: "_polymerData";
            readonly type: "tuple";
            readonly internalType: "struct PolymerCCTPFacet.PolymerCCTPData";
            readonly components: readonly [{
                readonly name: "polymerTokenFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxCCTPFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "minFinalityThreshold";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPolymerCCTP";
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
            readonly name: "_polymerData";
            readonly type: "tuple";
            readonly internalType: "struct PolymerCCTPFacet.PolymerCCTPData";
            readonly components: readonly [{
                readonly name: "polymerTokenFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxCCTPFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "minFinalityThreshold";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly type: "event";
        readonly name: "PolymerCCTPFeeSent";
        readonly inputs: readonly [{
            readonly name: "bridgeAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "polymerFee";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "minFinalityThreshold";
            readonly type: "uint32";
            readonly indexed: false;
            readonly internalType: "uint32";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
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
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
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
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }];
    static createInterface(): PolymerCCTPFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolymerCCTPFacet;
}
export {};

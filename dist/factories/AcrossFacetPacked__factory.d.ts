import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetPacked, AcrossFacetPackedInterface } from "../AcrossFacetPacked";
declare type AcrossFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetPacked__factory extends ContractFactory {
    constructor(...args: AcrossFacetPackedConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetPacked>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetPacked;
    connect(signer: Signer): AcrossFacetPacked__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620026d8380380620026d8833981016040819052620000349162000079565b600080546001600160a01b0319166001600160a01b039283161790559182166080521660a052620000cd565b6001600160a01b03811681146200007657600080fd5b50565b6000806000606084860312156200008f57600080fd5b83516200009c8162000060565b6020850151909350620000af8162000060565b6040850151909250620000c28162000060565b809150509250925092565b60805160a0516125c26200011660003960008181610a790152610c6401526000818161057f01528181610862015281816109c301528181610a360152610c3301526125c26000f3fe6080604052600436106100dd5760003560e01c80637200b8291161007f578063c911e2ce11610059578063c911e2ce1461020d578063cf73f7111461023a578063e30c39781461025a578063f2fde38b1461028757600080fd5b80637200b829146101865780638da5cb5b1461019b578063ae6c7060146101ed57600080fd5b80634c128e60116100bb5780634c128e60146101385780634c4786421461014b5780635a39b10a1461016b5780635eedcbd61461017357600080fd5b80631cf9fd2f146100e25780632340ab8f1461011957806323452b9c14610123575b600080fd5b3480156100ee57600080fd5b506101026100fd366004611afb565b6102a7565b604051610110929190611bf1565b60405180910390f35b61012161050a565b005b34801561012f57600080fd5b50610121610739565b610121610146366004611d8c565b610803565b34801561015757600080fd5b50610121610166366004611e44565b61093b565b610121610a1f565b610121610181366004611eb9565b610bf6565b34801561019257600080fd5b50610121610d32565b3480156101a757600080fd5b506000546101c89073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610110565b3480156101f957600080fd5b50610102610208366004611afb565b610e18565b34801561021957600080fd5b5061022d610228366004611f49565b610ff7565b6040516101109190611f9c565b34801561024657600080fd5b5061022d610255366004611fb6565b611197565b34801561026657600080fd5b506001546101c89073ffffffffffffffffffffffffffffffffffffffff1681565b34801561029357600080fd5b506101216102a236600461204f565b6112a3565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a0850184905260c0850184905260e0850184905261010085018490526101208501849052855190810186528381529081018390529384018190528301529060748310156103aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f6461746120706173736564206973206e6f742074686520636f7272656374206c60448201527f656e67746800000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103b8600c6004858761206a565b6103c191612094565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526103f36020600c858761206a565b6103fc916120dc565b60601c60a083015261041260346020858761206a565b61041b916120dc565b60601c608083015261043160446034858761206a565b61043a91612122565b60801c60c083015261045060486044858761206a565b61045991612168565b60e090811c9083015261047060506048858761206a565b61047991612094565b60c01d60070b815261048f60546050858761206a565b61049891612168565b60e01c60208201526104ae60746054858761206a565b6104b7916121ae565b60608201526104c9836074818761206a565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060408201525b9250929050565b600061051a60346020368461206a565b610523916120dc565b60601c9050600061053860446034368461206a565b61054191612122565b60801c905061056873ffffffffffffffffffffffffffffffffffffffff8316333084611401565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec336105b36020600c36600061206a565b6105bc916120dc565b60601c6105ce6034602036600061206a565b6105d7916120dc565b60601c846105ea6048604436600061206a565b6105f391612168565b60e01c6106056050604836600061206a565b61060e91612094565b60c01c6106206054605036600061206a565b61062991612168565b60e01c61063a36607481600061206a565b6106496074605436600061206a565b610652916121ae565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08c901b16815261069399989796959493929190600401612234565b600060405180830381600087803b1580156106ad57600080fd5b505af11580156106c1573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13392506106f89150600c9050600436600061206a565b61070191612094565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461078a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166107d9576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b61082573ffffffffffffffffffffffffffffffffffffffff8a1633308b611401565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec33906108a7908a908d908d908c908c908c908c908c908c90600401612234565b600060405180830381600087803b1580156108c157600080fd5b505af11580156108d5573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008d1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a150505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461098c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610a1a57610a088383838181106109ac576109ac6122b1565b90506020020160208101906109c1919061204f565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6114c7565b80610a12816122e0565b91505061098f565b505050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec3334610a6b6020600c36600061206a565b610a74916120dc565b60601c7f000000000000000000000000000000000000000000000000000000000000000034610aa86024602036600061206a565b610ab191612168565b60e01c610ac3602c602436600061206a565b610acc91612094565b60c01c610ade6030602c36600061206a565b610ae791612168565b60e01c610af836605081600061206a565b610b076050603036600061206a565b610b10916121ae565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b168152610b5199989796959493929190600401612234565b6000604051808303818588803b158015610b6a57600080fd5b505af1158015610b7e573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350610bb79250600c91506004905036600061206a565b610bc091612094565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec33903490610c9a908b907f00000000000000000000000000000000000000000000000000000000000000009084908d908d908d908d908d908d9060040161233f565b6000604051808303818588803b158015610cb357600080fd5b505af1158015610cc7573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008c1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506020019150610d209050565b60405180910390a15050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610d84576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a0850184905260c0850184905260e085018490526101008501849052610120850184905285519081018652838152908101839052938401819052830152906050831015610f16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e2038302900000000000000000000000000000000000000000000000060648201526084016103a1565b610f24600c6004858761206a565b610f2d91612094565b7fffffffffffffffff000000000000000000000000000000000000000000000000168252610f5f6020600c858761206a565b610f68916120dc565b60601c60a0830152610f7e60246020858761206a565b610f8791612168565b60e090811c90830152610f9e602c6024858761206a565b610fa791612094565b60c01d60070b8152610fbd6030602c858761206a565b610fc691612168565b60e01c6020820152610fdc60506030858761206a565b610fe5916121ae565b60608201526104c9836050818761206a565b606063ffffffff67ffffffffffffffff88161115611097576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016103a1565b6fffffffffffffffffffffffffffffffff881115611137576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f6d696e416d6f756e742076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e743132380000000000000000000000000000000060648201526084016103a1565b632340ab8f60e01b8b8b60601b8b60601b8b60801b8b60e01b8b60c01b8b60e01b8960001b8c8c6040516020016111789b9a9998979695949392919061239b565b60405160208183030381529060405290509a9950505050505050505050565b606063ffffffff67ffffffffffffffff88161115611237576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016103a1565b604051611286907f5a39b10a00000000000000000000000000000000000000000000000000000000908b9060608c901b9060e08c811b9160c08d901b918c901b908b908b908b90602001612481565b604051602081830303815290604052905098975050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146112f4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611341576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611390576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806114c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c454400000000000000000000000060448201526064016103a1565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff83166114e757505050565b73ffffffffffffffffffffffffffffffffffffffff8216611534576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156115a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115cd9190612535565b1015610a1a576115df83836000611606565b610a1a83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b8015806116a657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611680573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a49190612535565b155b611732576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016103a1565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610a1a928692916000916117fd9185169084906118aa565b905080516000148061181e57508080602001905181019061181e919061254e565b610a1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016103a1565b60606118b984846000856118c1565b949350505050565b606082471015611953576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016103a1565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161197c9190612570565b60006040518083038185875af1925050503d80600081146119b9576040519150601f19603f3d011682016040523d82523d6000602084013e6119be565b606091505b50915091506119cf878383876119da565b979650505050505050565b60608315611a70578251600003611a695773ffffffffffffffffffffffffffffffffffffffff85163b611a69576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103a1565b50816118b9565b6118b98383815115611a855781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a19190611f9c565b60008083601f840112611acb57600080fd5b50813567ffffffffffffffff811115611ae357600080fd5b60208301915083602082850101111561050357600080fd5b60008060208385031215611b0e57600080fd5b823567ffffffffffffffff811115611b2557600080fd5b611b3185828601611ab9565b90969095509350505050565b60005b83811015611b58578181015183820152602001611b40565b50506000910152565b60008151808452611b79816020860160208601611b3d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b805160070b825263ffffffff60208201511660208301526000604082015160806040850152611bdd6080850182611b61565b606093840151949093019390935250919050565b604081528251604082015260006020840151610140806060850152611c1a610180850183611b61565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0858403016080860152611c558382611b61565b9250506060860151611c7f60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e088015191506101208281880152818901519250611cf38488018415159052565b8801518015156101608801529250611d09915050565b508281036020840152611d1c8185611bab565b95945050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d4957600080fd5b919050565b803567ffffffffffffffff81168114611d4957600080fd5b8035600781900b8114611d4957600080fd5b803563ffffffff81168114611d4957600080fd5b6000806000806000806000806000806101208b8d031215611dac57600080fd5b8a359950611dbc60208c01611d25565b985060408b01359750611dd160608c01611d25565b9650611ddf60808c01611d4e565b9550611ded60a08c01611d66565b9450611dfb60c08c01611d78565b935060e08b013567ffffffffffffffff811115611e1757600080fd5b611e238d828e01611ab9565b915080945050809250506101008b013590509295989b9194979a5092959850565b60008060208385031215611e5757600080fd5b823567ffffffffffffffff80821115611e6f57600080fd5b818501915085601f830112611e8357600080fd5b813581811115611e9257600080fd5b8660208260051b8501011115611ea757600080fd5b60209290920196919550909350505050565b60008060008060008060008060e0898b031215611ed557600080fd5b88359750611ee560208a01611d25565b965060408901359550611efa60608a01611d66565b9450611f0860808a01611d78565b935060a089013567ffffffffffffffff811115611f2457600080fd5b611f308b828c01611ab9565b999c989b50969995989497949560c00135949350505050565b6000806000806000806000806000806101208b8d031215611f6957600080fd5b8a359950611f7960208c01611d25565b9850611f8760408c01611d25565b975060608b01359650611ddf60808c01611d4e565b602081526000611faf6020830184611b61565b9392505050565b60008060008060008060008060e0898b031215611fd257600080fd5b88359750611fe260208a01611d25565b9650611ff060408a01611d4e565b9550611ffe60608a01611d66565b945061200c60808a01611d78565b935060a0890135925060c089013567ffffffffffffffff81111561202f57600080fd5b61203b8b828c01611ab9565b999c989b5096995094979396929594505050565b60006020828403121561206157600080fd5b611faf82611d25565b6000808585111561207a57600080fd5b8386111561208757600080fd5b5050820193919092039150565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156120d45780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156120d45760149490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156120d45760109490940360031b84901b1690921692915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156120d45760049490940360031b84901b1690921692915050565b803560208310156121e5577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b165b92915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c1660208501525089604084015267ffffffffffffffff891660608401528760070b608084015263ffffffff871660a08401528060c084015261229a81840186886121eb565b9150508260e08301529a9950505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612338577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c084015261229a81840186886121eb565b7fffffffff000000000000000000000000000000000000000000000000000000008c811682527fffffffffffffffff0000000000000000000000000000000000000000000000008c811660048401527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008c8116600c8501528b1660208401527fffffffffffffffffffffffffffffffff000000000000000000000000000000008a166034840152888216604484015287166048830152851660508201526054810184905260008284607484013750600091016074019081529a9950505050505050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008a811682527fffffffffffffffff0000000000000000000000000000000000000000000000008a811660048401527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008a16600c8401528882166020840152871660248301528516602c82015260308101849052600082846050840137506000910160500190815298975050505050505050565b60006020828403121561254757600080fd5b5051919050565b60006020828403121561256057600080fd5b81518015158114611faf57600080fd5b60008251612582818460208701611b3d565b919091019291505056fea26469706673582212201e7d9c0d8f4d0f8adac2fe0bafede1cbe1b86d1149c5a6dec40ce50f06ce0d3064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForBridge";
        readonly inputs: readonly [{
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossERC20Min";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossNativeMin";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "LiFiAcrossTransfer";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes8";
            readonly indexed: false;
            readonly internalType: "bytes8";
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
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetPacked;
}
export {};
